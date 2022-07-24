import { Link } from 'react-router-dom';

import { useAuthContext } from '../../context/AuthContext';
import Guest from './Buttons/Guest/Guest';
import Logged from './Buttons/Logged/Logged';

import styles from './Nav.module.css';

const Nav = ({
    homeStyles,
}) => {
    const { user } = useAuthContext();

    const logo = homeStyles
        ? `${styles.logo__home}`
        : `${styles.logo}`;

    return (
        <nav className={styles.header__nav}>
            <h3 className={logo}>
                <Link to="/" >Cook Book</Link>
            </h3>
            <section>
                <ul className={styles.user__logged}>

                    {user?._id
                        ? <Logged homeStyles={homeStyles} />
                        : <Guest />
                    }
                </ul>
            </section>
        </nav>
    );
};

export default Nav;
