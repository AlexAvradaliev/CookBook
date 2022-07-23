import { useState } from 'react';
import { Link } from 'react-router-dom';

import showPassword from '../assets/images/show-password.svg';
import hidePassword from '../assets/images/hide-password.svg';
import ErrorMessage from '../../Common/Error-message/ErrorMessage';

import styles from './Login.module.css';

const Login = () => {

    const [toggle, setToggle] = useState(true);

    const onToggleClick = () => {
        setToggle(state => !state)
    }

    return (
        <main className={styles.main}>
            <section className={styles.container}>
                <h1 className={styles.title}>Login</h1>
                <form className={styles.content}>
                    <fieldset>
                        <section className={styles.user__details}>

                            <article className={styles.input__box}>
                                <i class="fas fa-envelope"></i>
                                <input type="text" id="email" className={`${styles.form__input} error__border`} placeholder=" " autoComplete='off' />
                                <label htmlFor="email" className={`${styles.form__label} error__label`}>Email</label>
                                <ErrorMessage message='text'>error</ErrorMessage>
                            </article>

                            <article className={styles.input__box}>
                                <i class="fas fa-lock"></i>
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
                            </article>

                        </section>

                        <button className={styles.button}>Login</button>

                    </fieldset>
                    <fieldset className={styles.text}>
                        <p>New to Cook Book?
                            <Link to="/register">
                                <strong className={styles.primary}>Create account</strong>
                            </Link>
                        </p>
                    </fieldset>
                </form>
            </section>
        </main>
    );
};

export default Login;
