import {Link} from 'react-router-dom';

import styles from './CommentCard.module.css';

const CommentCard = ({
    comment,
}) => {

    return (
                <article className={styles.comment}>
                    <header className={styles.comment__header}>
                        <Link to={`/recipe/${comment.recipe._id}`}>
                            <img src={comment.recipe.images[0]} alt={comment.recipe.name} />
                            <h3 className={styles.profile__content__text}>
                            {comment.recipe.name}
                            </h3>
                        </Link>
                    </header>
                    <section>
                        <strong>{(comment.createdAt)}</strong>
                        <p>{comment.text} </p>
                    </section>
                </article>
    );
};

export default CommentCard;
