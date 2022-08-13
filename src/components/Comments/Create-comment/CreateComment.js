import { memo, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useAuthContext } from '../../../context/AuthContext';
import { useCommentContext } from '../context/commentContext';
import * as commentService from '../../../servces/commentService';

import styles from './CreateComment.module.css';
import Loader from '../../Common/Loader/Loader';

const CreateComment = () => {

    const { user, logout } = useAuthContext();
    const { update, text, changeText, changeComments, comments, changeUpdate, addComments } = useCommentContext();
    const { recipeId } = useParams();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if(update){
            changeText(update.text)
        }
    },[update, changeText])

    const changeHandler = (e) => {
        changeText(e.target.value);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setLoading(true);
        if(update){
            commentService.edit(text, update._id, user.accessToken)
            .then(res=>{
                const commentsCopy = [...comments];
                commentsCopy.map((com, i) => {
                    if(com._id === res._id){
                      commentsCopy.splice(i,1,res);
                    };
                    return null;
            })
            .catch((err) => {
                if (err.status === 401) {
                    logout();
                    navigate('/');
                };
            })
            .finally(() => {
                setLoading(false);
            });
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
            .catch((err) => {
                if (err.status === 401) {
                    logout();
                    navigate('/');
                };
            })
            .finally(() => {
                setLoading(false);
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
                        {loading &&
                        <Loader />
                        }
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

export default memo(CreateComment);