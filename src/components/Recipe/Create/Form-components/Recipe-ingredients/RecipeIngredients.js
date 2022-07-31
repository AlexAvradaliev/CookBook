import { useState } from 'react';

import { useRecipeContext } from '../../context/recipeFormContext';

import ErrorMessage from '../../../../Common/Error-message/ErrorMessage';
import styles from './RecipeIngredients.module.css';

const RecipeIngredients = () => {

    const [ingredient, setIngredient] = useState('');

    const {
        errors,
        recipe,
        changeRecipe,
        checkData,
    } = useRecipeContext();

    const changeIngredient = (e) => {
        setIngredient(e.target.value);
    };

    const addIngredients = (e) => {
        e.preventDefault();
        changeRecipe('ingredients', [...recipe.ingredients, ingredient]);
        setIngredient('');
    };

    const removeIngredients = (ing) => {
        const ingredientsCopy = [...recipe.ingredients];
        const newIngredients = ingredientsCopy.filter((x) => x !== ing);
        changeRecipe('ingredients', newIngredients);
    };

    return (
        <article>
            <form onSubmit={addIngredients}>

                <div className={styles.ingredients__wrapper}>
                    <input
                        type="text"
                        name="ingredients"
                        id="ingredients"
                        className={styles.ingredients__wrapper__input}
                        placeholder=" "
                        value={ingredient}
                        onChange={changeIngredient}
                    />
                    <label htmlFor="ingredients" className={styles.ingredients__wrapper__label}>Ingredients</label>
                    <i className="fas fa-plus" onClick={addIngredients}></i>
                </div>
                {errors.ingredients &&
            <ErrorMessage >{errors.ingredients[0]}</ErrorMessage>
        }

            </form>
            {recipe.ingredients.length > 0 &&
                (<ul className={styles.create__ingredients__ul}>
                    {recipe.ingredients.map((ing, index) => (
                        <li key={ing + index}>
                            <div>
                                <i className="fas fa-dot-circle"></i>{" "}
                                <p>{" "}{ing}</p>
                            </div>
                            <i className={`fas fa-times`} onClick={() => removeIngredients(ing)}></i>
                        </li>
                    ))}
                </ul>
                )}
        </article>
    );
};

export default RecipeIngredients;
