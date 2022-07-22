import styles from './Nav.module.css';

const Nav = (props) => {
    const styleUser = props.homeStyles
        ? `${styles.user__logged__outer__home}`
        : `${styles.user__logged__outer}`;

        const logo = props.homeStyles
        ? `${styles.logo__home}`
        : `${styles.logo}`;

    return (
        <nav className={styles.header__nav}>
            <h3 className={logo}>
                <a href="/" >Cook Book</a>
            </h3>
            <section>
                <ul className={styles.user__logged}>
                    <li>
                        <a className={styleUser} href="/profile/:userId">
                            <img src="/assets/images/user.webp" alt="Alex" />
                            <p>Alex Alex </p>
                        </a>
                    </li>
                    <li>
                        <a className={`${styles.btn} ${styles.btn__primary}`} id="login" href="/login">
                            Login
                        </a>
                    </li>
                    <li>
                        <a className={`${styles.btn} ${styles.btn__primary}`} id="register" href="/register">
                            Regiser
                        </a>
                    </li>
                    <li>
                        <button className={`${styles.btn__lg} ${styles.btn__primary}`}>Logout</button>
                    </li>
                </ul>
            </section>
        </nav>
    );
};

export default Nav;
