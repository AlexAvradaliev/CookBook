import { Link, useNavigate } from 'react-router-dom';

import { useAuthContext } from '../../../../context/AuthContext';
import * as authService from '../../../../servces/authService';

import styles from './Logged.module.css';

const Logged = (props) => {
    const { user, logout } = useAuthContext();
    const navigate = useNavigate()

    const styleUser = props.homeStyles
        ? `${styles.user__logged__outer__home}`
        : `${styles.user__logged__outer}`;

    return (
        <>
            <li>
                <Link className={styleUser} to="/profile/:userId">
                    <img src="/assets/images/user.webp" alt="Alex" />
                    <p>Alex Alex </p>
                </Link>
            </li>
            <li>
                <button className={`${styles.btn__lg} ${styles.btn__primary}`}>Logout</button>
            </li>
        </>
    );
};

export default Logged;
