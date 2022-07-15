import styles from './Login.module.css';

const Login = () => {

    return (
        <section className={styles.auth}>
            <h2 className={styles.primary}>Login</h2>
            <form>
                <fieldset>
                    <input type="text" placeholder="Enter email..." name="email" />
                    <input type="password" placeholder="Enter password..." name="password" />
                    <button type="submit" className={`${styles.btn__lg} ${styles.btn__primary}`}>Login</button>
                </fieldset>
                <fieldset>
                    <p>New to Cook Book?
                        <a href="/register">
                            <strong className={styles.primary}>Create account</strong>
                        </a>
                    </p>
                </fieldset>
            </form>
        </section>
    );
};

export default Login;
