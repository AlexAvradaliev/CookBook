import styles from './RecipeCommentCard.module.css';

const RecipeCommentCard = () => {

    return (
        <>
            <article className={styles.comment__recipe__image}>
                <img src="assets/images/alex.jpg"
                    alt="Alex" />
            </article>
            <article>
                <div className={styles.comment__recipe__name}>
                    <p>Alex Alex </p>
                    <span className={styles.comment__recipe__createdAt}>5 months ago </span>
                </div>
                <div>
                    <p>This was quite tasty &amp; easy to make </p>
                    <button class={`${styles.btn} ${styles.btn__danger}`}>Delete</button>
                    <button class={`${styles.btn} ${styles.btn__info}`}>Edit</button>
                </div>
            </article>
        </>
    );
};

export default RecipeCommentCard;
