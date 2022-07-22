import ErrorMessage from '../../../../Common/Error-message/ErrorMessage';
import styles from './RecipeSteps.module.css';

const RecipeSteps = () => {

    return (
        <article>
            {/* <form> */}

                <div className={styles.steps__wrapper}>


                    <input type="text" id="steps" className={styles.steps__wrapper__input} placeholder=" " />
                    <i className="fas fa-plus"></i>
                    <label htmlFor="steps" className={styles.steps__wrapper__label}>Steps</label>
                </div>
            <ErrorMessage message='text'>error</ErrorMessage>

            {/* </form> */}
            <ul className={styles.create__steps__ul}>
                <li>
                    <div>
                        <i className="fas fa-dot-circle"></i>{" "}
                        <p>{" "}Bring the</p>
                    </div>
                    <i className={`fas fa-times`}></i>
                </li>
            </ul>
        </article>
    );
};

export default RecipeSteps;
