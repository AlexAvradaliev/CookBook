import { Link } from 'react-router-dom';

import styles from './Recipe.module.css';

const Recipe = ({
    recipeInfo,
}) => {

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
            <button className={`${styles.btn} ${styles.btn__info}`}>Update</button>
            <button className={`${styles.btn} ${styles.btn__danger}`}>Delete</button>
        </article>
    );
};

export default Recipe;
