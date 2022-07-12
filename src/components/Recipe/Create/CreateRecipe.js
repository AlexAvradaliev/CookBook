import styles from './CreateRecipe.module.css';
import RecipeCookTime from './Form-components/Recipe-cookTime/RecipeCookTime';
import RecipeCuisine from './Form-components/Recipe-cuisine/RecipeCuisine';
import RecipeDescription from './Form-components/Recipe-description/RecipeDescription';
import RecipeGroups from './Form-components/Recipe-groups/RecipeGroups';
import RecipeImages from './Form-components/Recipe-images/RecipeImages';
import RecipeIngredients from './Form-components/Recipe-ingredients/RecipeIngredients';
import RecipeLevel from './Form-components/Recipe-level/RecipeLevel';
import RecipeName from './Form-components/Recipe-name/RecipeName';
import RecipePrepTime from './Form-components/Recipe-prepTime/RecipePrepTime';
import RecipeSteps from './Form-components/Recipe-steps/RecipeSteps';

const CreateRecipe = () => {

    return (
        <section className={styles.profile__content}>
            <p className={styles.profile__content__text}>Create recipe</p>
            <div className={styles.create}>
                <form>

                    <RecipeName />
                    <RecipeDescription />

                    <fieldset className={styles.create__selects}>

                        <RecipeLevel />
                        <RecipeCuisine />

                    </fieldset>

                    <fieldset className={styles.create__times}>

                        <RecipePrepTime />
                        <RecipeCookTime />

                    </fieldset>

                    <RecipeGroups />
                    <RecipeImages />

                    <fieldset className={styles.create__steps}>

                        <RecipeSteps />
                        <RecipeIngredients />

                    </fieldset>

                    <button type="submit" className={`${styles.btn__lg} ${styles.btn__primary}`}>Create Recipe</button>
                </form>
            </div>
        </section>
    );
};

export default CreateRecipe;
