import showPassword from '../assets/images/show-password.svg';
import hidePassword from '../assets/images/hide-password.svg';
import ErrorMessage from '../../Common/Error-message/ErrorMessage';
import styles from './Login.module.css';

const Login = () => {

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
                                <input type="password" id="password" className={styles.form__input} placeholder=" " />
                                <label htmlFor="password" className={styles.form__label}>Password</label>
                                {/* <img src={showPassword} alt='show'/> */}
                                <img src={hidePassword} alt='hide' />
                            </article>

                        </section>

                        <button className={styles.button}>Login</button>

                    </fieldset>
                    <fieldset className={styles.text}>
                        <p>New to Cook Book?
                            <a href="/register">
                                <strong className={styles.primary}>Create account</strong>
                            </a>
                        </p>
                    </fieldset>
                </form>
            </section>
        </main>
    );
};

export default Login;
