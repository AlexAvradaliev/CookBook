import { Link, useNavigate } from 'react-router-dom';

import { useAuthContext } from '../../../../context/AuthContext';
import * as authService from '../../../../servces/authService';

import styles from './Logged.module.css';

const Logged = (props) => {
    const { user, logout } = useAuthContext();
    const navigate = useNavigate();

    const styleUser = props.homeStyles
        ? `${styles.user__logged__outer__home}`
        : `${styles.user__logged__outer}`;

    const onClickLogout = () => {
        authService.logout(user.accessToken)
            .then(() => {
                logout();
                navigate('/');
            });
    };

    return (
        <>
            <li>
                <Link className={styleUser} to={`/profile/${user?._id}`}>
                    <img src={user?.photo} alt={user?.firstName} />
                    <p>{user?.firstName} {" "} {user?.lastName}</p>
                </Link>
            </li>
            <li>
                <button
                    className={`${styles.btn__lg} ${styles.btn__primary}`}
                    onClick={onClickLogout}
                >
                    Logout
                </button>
            </li>
        </>
    );
};

export default Logged;
