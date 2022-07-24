import { Link } from 'react-router-dom';

import styles from './Guest.module.css';

const Guest = () => {

    return (
        <>
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
            </>
    );
};

export default Guest;
