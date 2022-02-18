import { ErrorMessage, FastField } from 'formik';
import React from 'react';
import TextError from './TextError';
import styles from '../styles/PizzaForm.module.css';

const CheckboxButtons = props => {
    const { label, name, options, ...rest } = props;

    return (
        <div>
            {label && <h3 className={styles.choose}>{label}</h3>}
            <div className={styles.ingredients}>
                <FastField name={name} {...rest}>
                    {({ field }) => {
                        return options.map(option => (
                            <React.Fragment key={option.value}>
                                <div className={styles.option}>
                                    <input
                                        type="checkbox"
                                        id={option.value}
                                        {...field}
                                        value={option.value}
                                        checked={field.value.includes(
                                            option.value
                                        )}
                                        className={styles.checkbox}
                                    />
                                    <label htmlFor={option.value}>
                                        {option.key}
                                    </label>
                                </div>
                            </React.Fragment>
                        ));
                    }}
                </FastField>
                <ErrorMessage name={name} component={TextError} />
            </div>
        </div>
    );
};

export default CheckboxButtons;
