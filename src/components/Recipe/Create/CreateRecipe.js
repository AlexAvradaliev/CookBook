import RecipeCookTime from './Form-components/Recipe-cookTime/RecipeCookTime';
import RecipeCuisine from './Form-components/Recipe-cuisine/RecipeCuisine';
import RecipeDescription from './Form-components/Recipe-description/RecipeDescription';
import RecipeGroups from './Form-components/Recipe-groups/RecipeGroups';
import RecipeImages from './Form-components/Recipe-images/RecipeImages';
import RecipeIngredients from './Form-components/Recipe-ingredients/RecipeIngredients';
import RecipeLevel from './Form-components/Recipe-level/RecipeLevel';
import RecipeTitile from './Form-components/Recipe-title/RecipeTitile';
import RecipePrepTime from './Form-components/Recipe-prepTime/RecipePrepTime';
import RecipeSteps from './Form-components/Recipe-steps/RecipeSteps';
import styles from './CreateRecipe.module.css';

const CreateRecipe = () => {

    return (
        <section className={styles.profile__content}>
            <p className={styles.profile__content__text}>Create recipe</p>
            <div className={styles.create}>
                <form>
                    <fieldset>

                        <RecipeTitile />
                        <RecipeDescription />

                    </fieldset>

                    <fieldset className={styles.create__selects}>

                        <RecipeLevel />
                        <RecipeCuisine />

                    </fieldset>

                    <fieldset className={styles.create__time}>

                        <RecipePrepTime />
                        <RecipeCookTime />

                    </fieldset>

                    <RecipeGroups />
                    <RecipeImages />

                    <fieldset className={styles.create__steps}>

                        <RecipeSteps />
                        <RecipeIngredients />

                    </fieldset>

                    <button type="submit" className={`${styles.button} ${styles.btn__primary}`}>Create Recipe</button>
                </form>
            </div>
        </section>



    );
};

export default CreateRecipe;
