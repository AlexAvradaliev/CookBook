import ErrorMessage from '../../../../Common/Error-message/ErrorMessage';
import styles from './RecipeLevel.module.css';

const RecipeLevel = () => {

    return (
        <article>
        <label className={styles.level__label} htmlFor="level">
            <p>Select level</p>
            <select name="level">
                <option value="Easy">Easy</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
            </select>
        </label>
        <ErrorMessage message='level'>error</ErrorMessage>
        </article>
    );
};

export default RecipeLevel;
