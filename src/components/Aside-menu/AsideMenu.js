import { NavLink } from 'react-router-dom';

import styles from './AsideMenu.module.css';

const AsideMenu = () => {
    const setNavStyle = ({isActive}) => {
        return isActive
            ? styles.active
            : '';
    }

    return (
        <aside className={styles.profile__aside}>
            <ul>

                <p className={styles.profile__aside__text}>Activity</p>

                <li>
                    <NavLink to="/profile/userId" className={setNavStyle}><p>Recipes</p></NavLink>
                </li>
                <li>
                    <NavLink to="/profile/:userId/comments" className={setNavStyle}><p>Comments</p></NavLink>
                </li>
                <li>
                    <NavLink to="/profile/:userId/create-recipe" className={setNavStyle}><p>Create Recipe</p></NavLink>
                </li>
                <li>
                    <NavLink to="/profile/:userId/edit" className={setNavStyle}><p>Edit Profile</p></NavLink>
                </li>
            </ul>
        </aside>
    );
};

export default AsideMenu;
