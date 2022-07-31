import { useRecipeContext } from '../../context/recipeFormContext';

import ErrorMessage from '../../../../Common/Error-message/ErrorMessage';
import styles from './RecipeCuisine.module.css';

const RecipeCuisine = () => {

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
        <label className={styles.cuisine__label} htmlFor="cuisine">
            <p>Select cuisine</p>
            <select
             name="cuisine"
             value={recipe.cuisine}
             onChange={changeHandler}
             onBlur={verifyField}
             >
                <option value="Moroccan">Moroccan</option>
                <option value="Mexican">Mexican</option>
                <option value="Spanish">Spanish</option>
                <option value="Chinese">Chinese</option>
                <option value="Japanese">Japanese</option>
                <option value="Indian">Indian</option>
                <option value="American">American</option>
                <option value="Turkish">Turkish</option>
                <option value="Thai">Thai</option>
                <option value="French">French</option>
                <option value="Italian">Italian</option>
            </select>
        </label>
            <ErrorMessage message='text'>error</ErrorMessage>
            </article>
    );
};

export default RecipeCuisine;
