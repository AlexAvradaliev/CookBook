import { useRecipeContext } from '../../context/recipeFormContext';

import ErrorMessage from '../../../../Common/Error-message/ErrorMessage';
import styles from './RecipeCookTime.module.css';

const RecipeCookTime = () => {

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
        <article className={styles.cook__time__wrapper}>
            <input 
            type="text"
            name="cookTime"
             id="cookTime"
              className={styles.cook__time__wrapper__input}
               placeholder=" "
               onChange={changeHandler}
               onBlur={verifyField}
               value={recipe.cookTime}
                />
            <label htmlFor="cookTime" className={styles.cook__time__wrapper__label}>Cooking time</label>
            <ErrorMessage message='text'>error</ErrorMessage>
        </article>
    );
};

export default RecipeCookTime;
