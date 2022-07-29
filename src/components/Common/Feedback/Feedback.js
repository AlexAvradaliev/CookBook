import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { useAuthContext } from '../../../context/AuthContext';
import * as feedbackService from '../../../servces/feedbackServices';
import styles from './Feedback.module.css';

const Feedback = () => {

    const { recipeId } = useParams();
    const {user} = useAuthContext();

    const [rating, setRating] = useState(0);

    const changeRageting = (e) => {
        feedbackService.create(e.target.value, recipeId,user.accessToken)
        .then(res => {
            setRating(res.value);
        })

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
                        checked={rating == 5}
                    />
                    <label htmlFor="rating-5"></label>
                    <input
                        type="radio"
                        name="rating"
                        id="rating-4"
                        value={4}
                        onChange={changeRageting}
                        checked={rating == 4}
                    />
                    <label htmlFor="rating-4"></label>
                    <input
                        type="radio"
                        name="rating"
                        id="rating-3"
                        value={3}
                        onChange={changeRageting}
                        checked={rating == 3}
                    />
                    <label htmlFor="rating-3"></label>
                    <input
                        type="radio"
                        name="rating"
                        id="rating-2"
                        value={2}
                        onChange={changeRageting}
                        checked={rating == 2}
                    />
                    <label htmlFor="rating-2"></label>
                    <input
                        type="radio"
                        name="rating"
                        id="rating-1"
                        value={1}
                        onChange={changeRageting}
                        checked={rating == 1}
                    />
                    <label htmlFor="rating-1"></label>
                </div>
            </article>
        </section>
    );
};

export default Feedback;
