import { useState } from 'react';
import { Link } from 'react-router-dom';

import showPassword from '../assets/images/show-password.svg';
import hidePassword from '../assets/images/hide-password.svg';
import ErrorMessage from '../../Common/Error-message/ErrorMessage';

import styles from './Register.module.css';

const Register = () => {

    const [toggle, setToggle] = useState(true);

    const onToggleClick = () => {
        setToggle(state => !state)
    }

    return (
        <main className={styles.main}>
            <section className={styles.container}>
                <h1 className={styles.title}>Register</h1>
                <form >
                    <fieldset className={styles.content}>
                        <section className={styles.user__details}>
                            <article className={styles.input__box}>
                                <i className="fas fa-user"></i>
                                <input
                                    type="text"
                                    id="firstName"
                                    className={styles.form__input}
                                    placeholder=" "
                                    autoFocus
                                    autoComplete='off'
                                />
                                <label htmlFor="firstName" className={styles.form__label}>First name</label>
                                <ErrorMessage message='text'>error</ErrorMessage>
                            </article>

                            <article className={styles.input__box}>
                                <i className="fas fa-user"></i>
                                <input
                                    type="text"
                                    id="lastName"
                                    className={styles.form__input}
                                    placeholder=" "
                                    autoFocus
                                    autoComplete='off'
                                />
                                <label htmlFor="lastName" className={styles.form__label}>Last name</label>
                                <ErrorMessage message='text'>error</ErrorMessage>
                            </article>

                            <article className={`${styles.input__box} ${styles.xl}`}>
                                <i className="fas fa-envelope"></i>
                                <input
                                    type="text"
                                    id="email"
                                    className={styles.form__input}
                                    placeholder=" "
                                    autoFocus
                                    autoComplete='off'
                                />
                                <label htmlFor="email" className={styles.form__label}>Email</label>
                                <ErrorMessage message='text'>error</ErrorMessage>
                            </article>

                            <article className={styles.input__box}>
                                <i className="fas fa-lock"></i>
                                <input
                                    type={
                                        toggle
                                            ? 'password'
                                            : 'text'
                                    }
                                    id="password"
                                    className={styles.form__input}
                                    placeholder=" "
                                    autoFocus
                                />
                                <label htmlFor="password" className={styles.form__label}>Password</label>
                                <img
                                    src={toggle
                                        ? showPassword
                                        : hidePassword
                                    }
                                    alt='hide'
                                    onClick={onToggleClick}
                                />
                                <ErrorMessage message='text'>error</ErrorMessage>
                            </article>

                            <article className={styles.input__box}>
                                <i className="fas fa-lock"></i>
                                <input
                                    type={
                                        toggle
                                            ? 'password'
                                            : 'text'
                                    }
                                    id="repass"
                                    className={styles.form__input}
                                    placeholder=" "
                                    autoFocus

                                />
                                <label htmlFor="repass" className={styles.form__label}>Confirm pasword</label>
                                
                                <ErrorMessage message='text'>error</ErrorMessage>
                            </article>
                        </section>
                    </fieldset>
                    <button className={styles.button}>Register</button>

                    <fieldset className={styles.text}>
                        <p>
                            Already have an account?
                            {' '}
                            <Link to="/register">
                                <strong className={styles.primary}>Login</strong>
                            </Link>
                        </p>
                    </fieldset>

                </form>
            </section>
        </main>
    );
};

export default Register;
