import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './Recipe.module.css';

const Recipe = ({
    recipeInfo,
}) => {

    const location = useLocation();
    const [showButtons, setShowButtons] = useState(false);
    useEffect(() => {
        if (location.pathname.includes('profile')) {
            setShowButtons(true);
        };
    }, [location]);

    return (
        <article className={styles.recipe}>
            <Link to={`/recipe/${recipeInfo._id}`}>
                <img
                    className={styles.recipe__image}
                    src={recipeInfo?.images[0]}
                    alt={recipeInfo?.name}
                />
                <p className={styles.recipe__name}>{recipeInfo?.name} </p>
                <div className={styles.recipe__owner}>
                    <img
                        src={recipeInfo._ownerId?.photo}
                        alt={recipeInfo._ownerId?.firstName}
                    />
                    <p>
                        {recipeInfo._ownerId?.firstName}{' '}
                        {recipeInfo._ownerId?.lastName}
                    </p>
                </div>
            </Link>
            
            {showButtons && (
                <>
                    <Link to={`/recipe/${recipeInfo._id}/edit`} className={`${styles.btn} ${styles.btn__info}`}>Update</Link>
                    <button className={`${styles.btn} ${styles.btn__danger}`}>Delete</button>
                </>
            )}

        </article>
    );
};

export default Recipe;
