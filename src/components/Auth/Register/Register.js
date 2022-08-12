import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import * as authService from '../../../servces/authService';
import { useAuthContext } from '../../../context/AuthContext';
import { useRegisterContext } from '../context/registerFormContext';

import showPassword from '../assets/images/show-password.svg';
import hidePassword from '../assets/images/hide-password.svg';
import ErrorMessage from '../../Common/Error-message/ErrorMessage';
import Loader from '../../Common/Loader/Loader';

import styles from './Register.module.css';

const Register = () => {

    const { register } = useAuthContext();
    const navigate = useNavigate();
    const {
        user,
        userChange,
        checkData,
        isFormValid,
        errors,
        errorsServer,
        addErrorServer
    } = useRegisterContext();

    const [toggle, setToggle] = useState(true);
    const [loading, setLoading] = useState(false);

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
        setLoading(true);

        if (isFormValid()) {
            authService.register(user)
                .then((authData) => {
                    register(authData);
                    navigate('/');
                    setLoading(false);
                })
                .catch((err) => {
                    addErrorServer(err.json);
                    setLoading(false);
                });
        };
    };

    return (
        <main className={styles.main}>
            <section className={styles.container}>
                <h1 className={styles.title}>Register</h1>

                <form method='POST' onSubmit={submitHandler}>

                    <fieldset className={styles.content}>
                        <section className={styles.user__details}>

                            <article className={styles.input__box}>
                                <i className="fas fa-user"></i>
                                <input
                                    type="text"
                                    name="firstName"
                                    id="firstName"
                                    className={styles.form__input}
                                    placeholder=" "
                                    onChange={changeHandler}
                                    value={user.firstName}
                                    onBlur={verifyField}
                                />
                                <label htmlFor="firstName" className={styles.form__label}>First name</label>
                                {errors?.firstName &&
                                    <ErrorMessage message='text'>{errors.firstName[0]}</ErrorMessage>
                                }

                                {errorsServer?.firstName &&
                                    <ErrorMessage message='text'>{errorsServer.firstName[0]}</ErrorMessage>
                                }

                            </article>

                            <article className={styles.input__box}>
                                <i className="fas fa-user"></i>
                                <input
                                    type="text"
                                    name="lastName"
                                    id="lastName"
                                    className={styles.form__input}
                                    placeholder=" "
                                    onChange={changeHandler}
                                    value={user.lastName}
                                    onBlur={verifyField}
                                />
                                <label htmlFor="lastName" className={styles.form__label}>Last name</label>
                                {errors?.lastName &&
                                    <ErrorMessage message='text'>{errors.lastName[0]}</ErrorMessage>
                                }

                                {errorsServer?.lastName &&
                                    <ErrorMessage message='text'>{errorsServer.lastName[0]}</ErrorMessage>
                                }

                            </article>

                            <article className={`${styles.input__box} ${styles.xl}`}>
                                <i className="fas fa-envelope"></i>
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    className={styles.form__input}
                                    placeholder=" "
                                    onChange={changeHandler}
                                    value={user.email}
                                    onBlur={verifyField}
                                />
                                <label htmlFor="email" className={styles.form__label}>Email</label>
                                {errors?.email &&
                                    <ErrorMessage message='text'>{errors.email[0]}</ErrorMessage>
                                }

                                {errorsServer?.email &&
                                    <ErrorMessage message='text'>{errorsServer.email[0]}</ErrorMessage>
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
                                {errors?.password &&
                                    <ErrorMessage message='text'>{errors.password[0]}</ErrorMessage>
                                }

                                {errorsServer?.password &&
                                    <ErrorMessage message='text'>{errorsServer.password[0]}</ErrorMessage>
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
                                    name="repassword"
                                    id="repassword"
                                    className={styles.form__input}
                                    placeholder=" "
                                    onChange={changeHandler}
                                    value={user.repassword}
                                    onBlur={verifyField}
                                />
                                <label htmlFor="repassword" className={styles.form__label}>Confirm pasword</label>

                                {errors?.repassword &&
                                    <ErrorMessage message='text'>{errors.repassword[0]}</ErrorMessage>
                                }

                                {errorsServer?.repassword &&
                                    <ErrorMessage message='text'>{errorsServer.repassword[0]}</ErrorMessage>
                                }

                            </article>

                        </section>
                    </fieldset>
                    {loading &&
                        <div className={styles.loading}>
                            <Loader />
                        </div>
                    }

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
