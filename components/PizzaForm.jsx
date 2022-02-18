import Image from 'next/image';
import styles from '../styles/PizzaForm.module.css';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import RadioButtons from './RadioButtons';
import CheckboxButtons from './CheckboxButtons';
import Input from './Input';

const validationSchema = Yup.object({
    size: Yup.string()
        .required('Please enter the size!')
        .oneOf(['1', '2', '3'], 'Please choose the available sizes!'),
    ingredients: Yup.array().min(1, 'Ingredients is required!'),
    count: Yup.number()
        .required('Please enter the amount!')
        .positive('Please enter a positive number!')
        .integer('Please enter an integer!'),
});

const sizeOptions = [
    { key: 'Small', value: '1' },
    { key: 'Medium', value: '2' },
    { key: 'Large', value: '3' },
];

const checkboxOptions = [
    { key: 'Double Ingredients', value: 'double' },
    { key: 'Extra Cheese', value: 'cheese' },
    { key: 'Spicy Sauce', value: 'spicy' },
    { key: 'Garlic Sauce', value: 'garlic' },
];

const PizzaForm = ({ pizza, onAddToCart }) => {
    const initialValues = {
        size: '1',
        ingredients: [],
        count: 1,
    };

    const addToCart = (data, submitProps) => {
        onAddToCart(data, () => {
            submitProps.resetForm();
        });
    };

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={addToCart}
            >
                {formikProps => {
                    return (
                        <Form>
                            <h1 className={styles.title}>{pizza.title}</h1>
                            <span className={styles.price}>
                                $
                                {(
                                    pizza.price * formikProps.values.size
                                ).toFixed(2)}
                            </span>
                            <p className={styles.desc}>{pizza.descriptions}</p>
                            <RadioButtons
                                label="Choose the size"
                                name="size"
                                options={sizeOptions}
                            />

                            <CheckboxButtons
                                label="Choose additional ingredients"
                                name="ingredients"
                                options={checkboxOptions}
                            />

                            <div className={styles.add}>
                                <Input type="number" name="count" />

                                <button
                                    type="submit"
                                    className={styles.button}
                                    disabled={
                                        !formikProps.isValid ||
                                        formikProps.isSubmitting
                                    }
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </Form>
                    );
                }}
            </Formik>
        </>
    );
};

export default PizzaForm;
