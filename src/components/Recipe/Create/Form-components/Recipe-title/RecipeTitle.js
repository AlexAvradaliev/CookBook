import { useRecipeContext } from '../../context/recipeFormContext';

import ErrorMessage from '../../../../Common/Error-message/ErrorMessage';
import styles from './RecipeTitle.module.css';

const RecipeName = () => {

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
        <article className={styles.title__wrapper}>
            <input
                type="text"
                name="title"
                id="title"
                className={styles.title__wrapper__input}
                placeholder=" "
                onChange={changeHandler}
                onBlur={verifyField}
                value={recipe.title}
            />
            <label htmlFor="title" className={styles.title__wrapper__label}>Title</label>
            <ErrorMessage message='text'>error</ErrorMessage>
        </article>
    );
};

export default RecipeName;
