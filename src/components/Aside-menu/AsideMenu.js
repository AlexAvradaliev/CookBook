import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './AsideMenu.module.css';

const AsideMenu = () => {
    const location = useLocation();
    

    const [active, setActive] = useState('');
   
    useEffect(() => {
        if (location.pathname.includes('edit')) {
            setActive('editProfile')

           } else if(location.pathname.includes('comments')){
               setActive('comments')

           } else if(location.pathname.includes('create-recipe')){
               setActive('createRecipe')

           } else if(location.pathname.includes('profile')){
               setActive('recipes')
           }
    }, [location]);
 
    return (
        <aside className={styles.profile__aside}>
            <ul>

                <p className={styles.profile__aside__text}>Activity</p>

                <li>
                    <Link to={`/profile`} className={active === "recipes" ? `${styles.active}` : ''}><p>Recipes</p></Link>
                </li>
                <li>
                    <Link to={`/profile/comments`} className={active === "comments" ? `${styles.active}` : ''}><p>Comments</p></Link>
                </li>
                <li>
                    <Link to={`/profile/create-recipe`}  className={active === "createRecipe" ? `${styles.active}` : ''}><p>Create Recipe</p></Link>
                </li>
                <li>
                    <Link to={`/profile/edit`} className={active === "editProfile" ? `${styles.active}` : ''}><p>Edit Profile</p></Link>
                </li>
            </ul>
        </aside>
    );
};

export default AsideMenu;
