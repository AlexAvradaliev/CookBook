import { useRecipeContext } from '../../context/recipeFormContext';

import ErrorMessage from '../../../../Common/Error-message/ErrorMessage';
import styles from './RecipeGroups.module.css';

const RecipeGroups = () => {
    const { errors, recipe, changeRecipe } = useRecipeContext();
    
    const changeGroups = (e) => {
        if (e.target.checked) {
            changeRecipe('groups', [...recipe.groups, e.target.value]);
        } else {
            const groups = [...recipe.groups].filter((x) => x !== e.target.value);
            changeRecipe('groups', groups);
        }
    };

    const isChecked = (name) => {
        return recipe.groups.includes(name)
    }

    return (
        <fieldset className={styles.create__groups}>
            <p className={styles.create__groups__p}>Select groups</p>
            <article>
                <div>
                    <label className={styles.checkbox__container}>
                        dairy
                        <input
                            defaultChecked={isChecked('dairy')}
                            onChange={changeGroups}
                            type="checkbox"
                            value="dairy"
                        />
                        <span className={styles.checkmark}></span>
                    </label>

                    <label className={styles.checkbox__container}>
                        fruits
                        <input
                            defaultChecked={isChecked("fruits")}
                            onChange={changeGroups}
                            type="checkbox"
                            value="fruits"
                        />
                        <span className={styles.checkmark}></span>
                    </label>

                    <label className={styles.checkbox__container}>
                        protein foods
                        <input
                            defaultChecked={isChecked("protein foods")}
                            onChange={changeGroups}
                            type="checkbox"
                            value="protein foods"
                        />
                        <span className={styles.checkmark}></span>
                    </label>

                    <label className={styles.checkbox__container}>
                        vegetables
                        <input
                            defaultChecked={isChecked("vegetables")}
                            onChange={changeGroups}
                            type="checkbox"
                            value="vegetables"
                        />
                        <span className={styles.checkmark}></span>
                    </label>

                    <label className={styles.checkbox__container}>
                        grains
                        <input
                            defaultChecked={isChecked("grains")}
                            onChange={changeGroups}
                            type="checkbox"
                            value="grains"
                        />
                        <span className={styles.checkmark}></span>
                    </label>

                </div>
                {errors.groups &&
                    <ErrorMessage >{errors.groups[0]}</ErrorMessage>
                }
            </article>
        </fieldset>
    );
};

export default RecipeGroups;
