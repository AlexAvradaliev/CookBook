import styles from './AsideMenu.module.css';

const AsideMenu = () => {

    return (
        <aside className={styles.profile__aside}>
            <ul>

                <p className={styles.profile__aside__text}>Activity</p>

                <li>
                    <a href="/profile/userId"><p>Recipes</p></a>
                </li>
                <li>
                    <a href="/profile/:userId/comments"><p>Comments</p></a>
                </li>
                <li>
                    <a href="/profile/:userId/create-recipe"><p>Create Recipe</p></a>
                </li>
                <li>
                    <a href="/profile/:userId/edit"><p className={styles.active}>Edit Profile</p></a>
                </li>
            </ul>
        </aside>
    );
};

export default AsideMenu;
