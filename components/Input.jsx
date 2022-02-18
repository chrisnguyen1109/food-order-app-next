import { ErrorMessage, FastField } from 'formik';
import TextError from './TextError';
import styles from '../styles/PizzaForm.module.css';

const Input = props => {
    const { label, name, ...rest } = props;

    return (
        <>
            {label && <label htmlFor={name}>{label}</label>}
            <FastField
                id={name}
                name={name}
                {...rest}
                className={styles.quantity}
            />
            <div style={{ position: 'absolute' }}>
                <ErrorMessage name={name} component={TextError} />
            </div>
        </>
    );
};

export default Input;
