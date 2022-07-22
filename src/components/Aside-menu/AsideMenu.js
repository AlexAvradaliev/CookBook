import styles from './AsideMenu.module.css';

const AsideMenu = () => {

    return (
        <aside className={styles.profile__aside}>
            <ul>

                <p className={styles.profile__aside__text}>Activity</p>

                <li>
                    <a href="#"><p>Recipes</p></a>
                </li>
                <li>
                    <a href="#"><p>Comments</p></a>
                </li>
                <li>
                    <a href="#"><p>Create Recipe</p></a>
                </li>
                <li>
                    <a href="#"><p className={styles.active}>Edit Profile</p></a>
                </li>
            </ul>
        </aside>
    );
};

export default AsideMenu;
