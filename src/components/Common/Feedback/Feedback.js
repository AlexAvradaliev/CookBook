import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useAuthContext } from '../../../context/AuthContext';
import { useErrorsContext } from '../../../context/ErrorsContext';
import * as feedbackService from '../../../servces/feedbackServices';

import styles from './Feedback.module.css';

const Feedback = () => {

    const { recipeId } = useParams();
    const { user, logout } = useAuthContext();
    const {addErrors} = useErrorsContext();
    const navigate = useNavigate();

    const [rating, setRating] = useState({ value: 0 });

    useEffect(() => {
        feedbackService.getOwner(recipeId, user.accessToken)
            .then(res => {
                setRating({ value: Number(res.value) || 0, ratingId: res._id })
            })
            .catch((err) => {
                if (err.status === 401) {
                    logout();
                    navigate('/');
                } else {
                    addErrors(err.jsonRes)
                    navigate('/404')
                };
            });
    }, [recipeId, user, addErrors, navigate, logout]);

    const changeRageting = (e) => {
        if (rating.value === 0) {
            feedbackService.create(e.target.value, recipeId, user.accessToken)
                .then(res => {
                    setRating({ value: Number(res.value), ratingId: res._id });
                }).catch((err) => {
                    if (err.status === 401) {
                        logout();
                        navigate('/');
                    } else {
                        addErrors(err.jsonRes)
                        navigate('/404')
                    };
                });
        } else {
            feedbackService.update({ rating: e.target.value }, user.accessToken, recipeId)
                .then(res => {
                    setRating({ value: Number(res.value), ratingId: res._id })
                })
                .catch((err) => {
                    if (err.status === 401) {
                        logout();
                        navigate('/');
                    } else {
                        addErrors(err.jsonRes)
                        navigate('/404')
                    };
                });
        };
    };


    return (
        <section className={styles.recipe__details__rating}>
            <h2>Your rating</h2>
            <article className={styles.rating__stars__feedback}>
                <div className={styles.rating__stars__elements}>
                    <input
                        type="radio"
                        name="rating"
                        id="rating-5"
                        value={5}
                        onChange={changeRageting}
                        checked={rating.value === 5}
                    />
                    <label htmlFor="rating-5"></label>
                    <input
                        type="radio"
                        name="rating"
                        id="rating-4"
                        value={4}
                        onChange={changeRageting}
                        checked={rating.value === 4}
                    />
                    <label htmlFor="rating-4"></label>
                    <input
                        type="radio"
                        name="rating"
                        id="rating-3"
                        value={3}
                        onChange={changeRageting}
                        checked={rating.value === 3}
                    />
                    <label htmlFor="rating-3"></label>
                    <input
                        type="radio"
                        name="rating"
                        id="rating-2"
                        value={2}
                        onChange={changeRageting}
                        checked={rating.value === 2}
                    />
                    <label htmlFor="rating-2"></label>
                    <input
                        type="radio"
                        name="rating"
                        id="rating-1"
                        value={1}
                        onChange={changeRageting}
                        checked={rating.value === 1}
                    />
                    <label htmlFor="rating-1"></label>
                </div>
            </article>
        </section>
    );
};

export default Feedback;
