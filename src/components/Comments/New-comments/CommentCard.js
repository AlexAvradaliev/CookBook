import styles from './CommentsCard.module.css';

const CommentCard = () => {

    return (
                <article className={styles.comment}>
                    <header className={styles.comment__header}>
                        <a href="#">
                            <img src="https://res.cloudinary.com/dmalpxwu4/image/upload/v1644681246/Recipes/recipes/pybsvkpkmary5gxmx7tp.jpg"
                                alt="Arizona Cactus and Beans" />
                            <p>
                                <h3>Arizona Cactus and Beans</h3>
                            </p>
                        </a>
                    </header>
                    <section>
                        <strong>25 days ago </strong>
                        <p>delicious </p>
                    </section>
                </article>
    );
};

export default CommentCard;
