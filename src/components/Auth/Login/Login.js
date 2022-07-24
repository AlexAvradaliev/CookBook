import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import * as authService from '../../../servces/authService';
import { useAuthContext } from '../../../context/AuthContext';
import { useLoginContext } from '../context/loginFormContext';

import showPassword from '../assets/images/show-password.svg';
import hidePassword from '../assets/images/hide-password.svg';
import ErrorMessage from '../../Common/Error-message/ErrorMessage';

import styles from './Login.module.css';

const Login = () => {

    const { login } = useAuthContext();
    const navigate = useNavigate();
    const {
        user,
        userChange,
        checkData,
        isFormValid,
        errors,
        errorsServer,
        addErrorServer
    } = useLoginContext();

    const [toggle, setToggle] = useState(true);

    const onToggleClick = () => {
        setToggle(state => !state);
    };

    const changeHandler = (e) => {
        userChange(e.target.name, e.target.value);
    };

    const verifyField = (e) => {
        checkData(e.target.name, e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();

        if (isFormValid()) {
            authService.login(user)
                .then((authData) => {
                    login(authData);
                    navigate('/');
                })
                .catch((err) => {
                    addErrorServer(err);
                });
        };
    };
    
    return (
        <main className={styles.main}>
            <section className={styles.container}>
                <h1 className={styles.title}>Login</h1>
                <form
                    method='POST'
                    onSubmit={submitHandler}
                    className={styles.content}>
                    <fieldset>
                        <section className={styles.user__details}>

                            <article className={styles.input__box}>
                                <i className="fas fa-envelope"></i>
                                <input
                                    type="text"
                                    name='email'
                                    id="email"
                                    className={`${styles.form__input}`}
                                    placeholder=" "
                                    onChange={changeHandler}
                                    value={user.email}
                                    onBlur={verifyField}
                                />
                                <label htmlFor="email" className={`${styles.form__label}`}>Email</label>
                                {errorsServer?.custom
                                    ? <ErrorMessage message='text'>{errorsServer.custom[0]}</ErrorMessage>
                                    : ''
                                }
                                {errors?.email
                                    ? <ErrorMessage message='text'>{errors.email[0]}</ErrorMessage>
                                    : ''
                                }
                            </article>

                            <article className={styles.input__box}>
                                <i className="fas fa-lock"></i>
                                <input
                                    type={
                                        toggle
                                            ? 'password'
                                            : 'text'
                                    }
                                    name="password"
                                    id="password"
                                    className={styles.form__input}
                                    placeholder=" "
                                    onChange={changeHandler}
                                    value={user.password}
                                    onBlur={verifyField}
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
                                {errorsServer?.custom
                                    ? <ErrorMessage message='text'>{errorsServer.custom[0]}</ErrorMessage>
                                    : ''
                                }
                                {errors?.password
                                    ? <ErrorMessage message='text'>{errors.password[0]}</ErrorMessage>
                                    : ''
                                }
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
