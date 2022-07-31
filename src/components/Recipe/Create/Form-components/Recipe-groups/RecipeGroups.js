import { useRecipeContext } from '../../context/recipeFormContext';

import ErrorMessage from '../../../../Common/Error-message/ErrorMessage';
import styles from './RecipeGroups.module.css';



const RecipeGroups = () => {
    const {errors, recipe, changeRecipe } = useRecipeContext();
    
    const changeGroups = (e) => {
        
        if(e.target.checked){
            changeRecipe('groups', [...recipe.groups, e.target.value]);
        } else {
        const groups = [...recipe.groups].filter((x) => x !== e.target.value);
        changeRecipe('groups', groups);
        }
    };

    return (
        <fieldset className={styles.create__groups}>
            <p className={styles.create__groups__p}>Select groups</p>
            <article>
                <div>

                    <label className={styles.checkbox__container}>
                        dairy
                        <input onChange={changeGroups} type="checkbox" value="dairy" />
                        <span className={styles.checkmark}></span>
                    </label>

                    <label className={styles.checkbox__container}>
                        fruits
                        <input onChange={changeGroups} type="checkbox" value="fruits" />
                        <span className={styles.checkmark}></span>
                    </label>

                    <label className={styles.checkbox__container}>
                        protein foods
                        <input onChange={changeGroups} type="checkbox" value="protein foods" />
                        <span className={styles.checkmark}></span>
                    </label>

                    <label className={styles.checkbox__container}>
                        vegetables
                        <input onChange={changeGroups} type="checkbox" value="vegetables" />
                        <span className={styles.checkmark}></span>
                    </label>

                    <label className={styles.checkbox__container}>
                        grains
                        <input onChange={changeGroups} type="checkbox" value="grains" />
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
