import {Link} from 'react-router-dom';
import moment from 'moment';

import styles from './CommentCard.module.css';

const CommentCard = ({
    comment,
}) => {

    return (
                <article className={styles.comment}>
                    <header className={styles.comment__header}>
                        <Link to={`/recipe/${comment.recipe._id}`}>
                            <img src={comment.recipe.images[0].url} alt={comment.recipe.title} />
                            <h3 className={styles.profile__content__text}>
                            {comment.recipe.title}
                            </h3>
                        </Link>
                    </header>
                    <section>
                        <strong>
                        {moment(comment.createdAt).fromNow()}{" "} 
                        </strong>
                        <p>{comment.text} </p>
                    </section>
                </article>
    );
};

export default CommentCard;
