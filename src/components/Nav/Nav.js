import { Link } from 'react-router-dom';

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
                <Link to="/" >Cook Book</Link>
            </h3>
            <section>
                <ul className={styles.user__logged}>
                    <li>
                        <Link className={styleUser} to="/profile/:userId">
                            <img src="/assets/images/user.webp" alt="Alex" />
                            <p>Alex Alex </p>
                        </Link>
                    </li>
                    <li>
                        <Link className={`${styles.btn} ${styles.btn__primary}`} id="login" to="/login">
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link className={`${styles.btn} ${styles.btn__primary}`} id="register" to="/register">
                            Regiser
                        </Link>
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
