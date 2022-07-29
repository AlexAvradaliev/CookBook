import { useParams } from 'react-router-dom';

import { useAuthContext } from '../../../context/AuthContext';
import { useCommentContext } from '../context/commentContext';
import * as commentService from '../../../servces/commentService';

import styles from './CreateComment.module.css';

const CreateComment = () => {

    const { user } = useAuthContext();
    const { text, changeText, changeComments } = useCommentContext();
    const { recipeId } = useParams();


    const changeHandler = (e) => {
        changeText(e.currentTarget.value);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        commentService.create(text, recipeId, user.accessToken)
            .then((res) => {
                changeComments(res);
                changeText('')
            })
            .catch(err => {
                console.log(err);
            });
    };
    return (
        <section className={styles.create__comment}>
            <form method="POST" onSubmit={onSubmitHandler}>
                <article className={styles.createComment__wrapper}>
                    <textarea
                        type="text"
                        id="createComment"
                        className={styles.createComment__wrapper__input}
                        placeholder=" "
                        rows={4}
                        onChange={changeHandler}
                        value={text}
                    />
                    <label
                        htmlFor="createComment"
                        className={styles.createComment__wrapper__label}
                    >
                        Give it a comment
                    </label>
                </article>
                <button className={styles.button}>Comment</button>

            </form>
        </section>
    );
};

export default CreateComment;