import ErrorMessage from '../../../../Common/Error-message/ErrorMessage';
import { useRecipeContext } from '../../context/recipeFormContext';
import styles from './RecipePrepTime.module.css';

const RecipePrepTime = () => {

    const {
        errors,
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
        <article className={styles.prep__time__wrapper}>
            <input
             type="text"
             name="prepTime"
              id="prepTime"
               className={styles.prep__time__wrapper__input}
                placeholder=" " 
                onChange={changeHandler}
                onBlur={verifyField}
                value={recipe.prepTime}
                />
            <label htmlFor="prepTime" className={styles.prep__time__wrapper__label}>Preparation time</label>
            {errors.prepTime &&
            <ErrorMessage >{errors.prepTime[0]}</ErrorMessage>
        }
        </article>
    );
};

export default RecipePrepTime;
