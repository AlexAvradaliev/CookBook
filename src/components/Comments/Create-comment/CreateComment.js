import { useParams } from 'react-router-dom';

import { useAuthContext } from '../../../context/AuthContext';
import { useCommentContext } from '../context/commentContext';
import * as commentService from '../../../servces/commentService';

import styles from './CreateComment.module.css';
import { useEffect } from 'react';

const CreateComment = () => {

    const { user } = useAuthContext();
    const { update, text, changeText, changeComments, comments, changeUpdate, addComments } = useCommentContext();
    const { recipeId } = useParams();

    useEffect(() => {
        if(update){
            changeText(update.text)
        }
    },[update])

    const changeHandler = (e) => {
        changeText(e.target.value);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if(update){
            commentService.edit(text, update._id, user.accessToken)
            .then(res=>{
                const commentsCopy = [...comments];
                commentsCopy.map((com, i) => {
                    if(com._id == res._id){
                      commentsCopy.splice(i,1,res);
                    }
            })
            addComments(commentsCopy);
            changeUpdate(null);
            changeText('');

        })
            
        } else {
            commentService.create(text, recipeId, user.accessToken)
            .then((res) => {
                changeComments(res);
                changeText('')
            })
            .catch(err => {
                console.log(err);
            });
        };
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
                        {update
                        ? 'Update a comment'
                        : 'Give it a comment'
                        }
                        
                    </label>
                </article>
                <button className={styles.button}>
                    {update
                        ? 'Update'
                        : 'Comment'
                    }

                </button>

            </form>
        </section>
    );
};

export default CreateComment;