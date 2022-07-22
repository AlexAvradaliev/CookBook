import ErrorMessage from '../../../../Common/Error-message/ErrorMessage';
import styles from './RecipeIngredients.module.css';

const RecipeIngredients = () => {

    return (
        <article>
            {/* <form> */}

                <div className={styles.ingredients__wrapper}>
                    <input type="text" id="ingredients" className={styles.ingredients__wrapper__input} placeholder=" " />
                    <label htmlFor="ingredients" className={styles.ingredients__wrapper__label}>Ingredients</label>
                    <i className="fas fa-plus"></i>
                </div>
            <ErrorMessage message='text'>error</ErrorMessage>

            {/* </form> */}
            <ul className={styles.create__ingredients__ul}>
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

export default RecipeIngredients;
