import { useRecipeContext } from '../../context/recipeFormContext';

import ErrorMessage from '../../../../Common/Error-message/ErrorMessage';
import styles from './RecipeDescription.module.css';

const RecipeDescription = () => {

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
        <article className={styles.description__wrapper}>
            <textarea
                type="text"
                name="description"
                id="description"
                className={styles.description__wrapper__input}
                placeholder=" "
                rows={4}
                onChange={changeHandler}
                onBlur={verifyField}
                value={recipe.description}
            />
            <label htmlFor="description" className={styles.description__wrapper__label}>Description</label>
            {errors.description &&
            <ErrorMessage >{errors.description[0]}</ErrorMessage>
        }
        </article>
    );
};

export default RecipeDescription;
