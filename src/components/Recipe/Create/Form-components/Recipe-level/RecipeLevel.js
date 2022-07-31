import { useRecipeContext } from '../../context/recipeFormContext';

import ErrorMessage from '../../../../Common/Error-message/ErrorMessage';
import styles from './RecipeLevel.module.css';

const RecipeLevel = () => {

    const {
        recipe,
        changeRecipe,
        checkData,
    } = useRecipeContext();

    const changeHandler = (e) => {
        changeRecipe(e.target.name, e.target.value);
    };

    const verifyField = (e) => {
        checkData(e.target.name, e.target.value);
    };

    return (
        <article>
        <label className={styles.level__label} htmlFor="level">
            <p>Select level</p>
            <select
             name="level"
             value={recipe.level}
             onChange={changeHandler}
             onBlur={verifyField}
             >
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
