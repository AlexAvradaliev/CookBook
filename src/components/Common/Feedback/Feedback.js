import styles from './Feedback.module.css';

const Feedback = () => {

    return (
        <section className={styles.recipe__details__rating}>
            <h2>Your rating</h2>
            <article className={styles.rating__stars__feedback}>
                <div className={styles.rating__stars__elements}>
                    <input type="radio" name="rating" id="rating-5" />
                    <label htmlFor="rating-5"></label>
                    <input type="radio" name="rating" id="rating-4" />
                    <label htmlFor="rating-4"></label>
                    <input type="radio" name="rating" id="rating-3" />
                    <label htmlFor="rating-3"></label>
                    <input type="radio" name="rating" id="rating-2" />
                    <label htmlFor="rating-2"></label>
                    <input type="radio" name="rating" id="rating-1" />
                    <label htmlFor="rating-1"></label>
                </div>
            </article>
        </section>
    );
};

export default Feedback;
