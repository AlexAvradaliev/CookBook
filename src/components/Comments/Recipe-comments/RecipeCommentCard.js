import styles from './RecipeCommentCard.module.css';

const RecipeCommentCard = () => {

    return (
        <section className={styles.comment__card__wrapper}>
            <article className={styles.comment__card__image__wrapper}>
                <div className={styles.comment__recipe__image}>
                <img src="/assets/images/user.webp" alt="Alex" />
                </div>
                <div className={styles.comment__recipe__name}>
                    <p>Alex Alex </p>
                    <span className={styles.comment__recipe__createdAt}>5 months ago </span>
                </div>
            </article>
            <article className={styles.comment__card__button__wrapper}>
                <div>
                    <p>This was quite tasty &amp; easy to make </p>
                </div>
                <div>
                <button className={`${styles.btn} ${styles.btn__info}`}>Update</button>
                    <button className={`${styles.btn} ${styles.btn__danger}`}>Delete</button>
                </div>
            </article>
        </section>
    );
};

export default RecipeCommentCard;
