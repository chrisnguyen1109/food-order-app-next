import { ErrorMessage, FastField } from 'formik';
import React from 'react';
import TextError from './TextError';
import styles from '../styles/PizzaForm.module.css';
import Image from 'next/image';

const RadioButtons = props => {
    const { label, name, options, ...rest } = props;

    return (
        <>
            {label && <h3 className={styles.choose}>{label}</h3>}
            <div className={styles.sizes}>
                <FastField name={name} {...rest}>
                    {({ field }) => {
                        return options.map(option => (
                            <React.Fragment key={option.value}>
                                <input
                                    type="radio"
                                    id={option.value}
                                    {...field}
                                    value={option.value}
                                    checked={option.value === field.value}
                                    // style={{ display: 'none' }}
                                />
                                <label
                                    className={styles[`size--${option.value}`]}
                                    htmlFor={option.value}
                                >
                                    <Image
                                        src="/img/size.png"
                                        layout="fill"
                                        alt=""
                                    />
                                    <span className={styles.number}>
                                        {option.key}
                                    </span>
                                </label>
                            </React.Fragment>
                        ));
                    }}
                </FastField>
                <ErrorMessage name={name} component={TextError} />
            </div>
        </>
    );
};

export default RadioButtons;
