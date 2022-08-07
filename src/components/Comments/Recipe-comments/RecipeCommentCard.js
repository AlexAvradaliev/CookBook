import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';

import { useAuthContext } from '../../../context/AuthContext';
import { useCommentContext } from '../context/commentContext';
import * as commentService from '../../../servces/commentService';

import styles from './RecipeCommentCard.module.css';

const RecipeCommentCard = () => {

    const { user } = useAuthContext();
    const { comments, addComments, changeUpdate } = useCommentContext();
    const { recipeId } = useParams();

    useEffect(() => {
        commentService.getAllByRecipe(recipeId, user?.accessToken)
            .then(res => {
                addComments(res);
            })
            .catch(err => {
                console.log(err);
            });
    }, [ recipeId, user.accessToken]);

    const updateHandler = (e) => {
        const id = e.target.id;
        const comment = comments.filter(x => x._id == id);
        changeUpdate(comment[0])
        window.scrollTo({
            top: 700,
            behavior: 'smooth',
        });
    };

    const deleteHandler = (id) => {
        commentService.remove(id, user.accessToken)
        .then(() => {
            const filtred = comments.filter(x => x._id != id);
            addComments(filtred);
        })
    };

    return (
        <>
            {comments.map(x =>
            (
                <section key={x._id} className={styles.comment__card__wrapper}>
                    <article className={styles.comment__card__image__wrapper}>
                        <div className={styles.comment__recipe__image}>
                            <img src={x._ownerId.photo} alt={x._ownerId.lastName} />
                        </div>
                        <div className={styles.comment__recipe__name}>
                            <p>{x._ownerId.firstName}{" "}{x._ownerId.lastName}</p>
                            <span className={styles.comment__recipe__createdAt}>
                                {moment(x.createdAt).fromNow()}{" "} 
                            </span>
                        </div>
                    </article>
                    <article className={styles.comment__card__button__wrapper}>
                        <div>
                            <p>{x.text}</p>
                        </div>

                        {user?._id && user?._id === x._ownerId._id && (
                            <div>
                                <button
                                    onClick={updateHandler}
                                    className={`${styles.btn} ${styles.btn__info}`}
                                    id={x._id}
                                >
                                    Update
                                </button>
                                <button
                                onClick={() => deleteHandler(x._id)}
                                    className={`${styles.btn} ${styles.btn__danger}`}
                                >
                                    Delete
                                </button>
                            </div>
                        )}

                    </article>
                </section>
            )
            )}
        </>
    );
};

export default RecipeCommentCard;
