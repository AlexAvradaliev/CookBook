import {Link} from 'react-router-dom';

import styles from './CommentCard.module.css';

const CommentCard = () => {

    return (
                <article className={styles.comment}>
                    <header className={styles.comment__header}>
                        <Link to="#">
                            <img src="https://res.cloudinary.com/dmalpxwu4/image/upload/v1644681246/Recipes/recipes/pybsvkpkmary5gxmx7tp.jpg"
                                alt="Arizona Cactus and Beans" />
                            <h3 className={styles.profile__content__text}>
                                Arizona Cactus and Beans
                            </h3>
                        </Link>
                    </header>
                    <section>
                        <strong>25 days ago </strong>
                        <p>delicious </p>
                    </section>
                </article>
    );
};

export default CommentCard;
