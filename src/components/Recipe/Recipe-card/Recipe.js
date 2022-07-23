import { Link } from 'react-router-dom';

import styles from './Recipe.module.css';

const Recipe = () => {

    return (
        <article className={styles.recipe}>
        <Link to="#">
            <img className={styles.recipe__image}
                src="https://res.cloudinary.com/dmalpxwu4/image/upload/v1644681073/Recipes/recipes/bj5n2rrfqximbb28zbtj.jpg"
                alt="Carrot and Pear Sauce" />
            <p className={styles.recipe__name}>Carrot and Pear Sauce </p>
            <div className={styles.recipe__owner}>
                <img src="/assets/images/user.webp"
                    alt="alex" />
                <p>Alex Alex</p>
            </div>
        </Link>
        <button className={`${styles.btn} ${styles.btn__info}`}>Update</button>
        <button className={`${styles.btn} ${styles.btn__danger}`}>Delete</button>
    </article>
    );
};

export default Recipe;
