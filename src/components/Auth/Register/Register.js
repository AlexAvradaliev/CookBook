import styles from './Register.module.css';

const Register = () => {

    return (
        <section className={styles.auth}>
            <h2 className={styles.primary}>Register</h2>
            <form>
                <fieldset>
                    <input type="text" placeholder="First name" name='firstName' />
                    <input type="text" placeholder="Last name"  name='lastName' />
                    <input type="text" placeholder="Enter email..." name='email' />
                    <input type="password" placeholder="Enter password..." name='password' />
                    <input type="password" placeholder="Enter confirm password..." name='repassword' />
                    <button type="submit" className={`${styles.btn__lg} ${styles.btn__primary}`}>Register</button>
                </fieldset>
                <fieldset>
                    <p>Already have an account?
                        <a href="/login"> <strong className={styles.primary}>Login</strong></a>
                    </p>
                </fieldset>
            </form>
        </section>
    );
};

export default Register;
