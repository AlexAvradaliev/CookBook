import { useEffect } from 'react';
import {useNavigate, useParams} from 'react-router-dom';

import { useRecipeContext } from './context/recipeFormContext';
import { useAuthContext } from '../../../context/AuthContext';
import * as recipeService from '../../../servces/recipeService';

import RecipeCookTime from './Form-components/Recipe-cookTime/RecipeCookTime';
import RecipeCuisine from './Form-components/Recipe-cuisine/RecipeCuisine';
import RecipeDescription from './Form-components/Recipe-description/RecipeDescription';
import RecipeGroups from './Form-components/Recipe-groups/RecipeGroups';
import RecipeImages from './Form-components/Recipe-images/RecipeImages';
import RecipeIngredients from './Form-components/Recipe-ingredients/RecipeIngredients';
import RecipeLevel from './Form-components/Recipe-level/RecipeLevel';
import RecipeTitle from './Form-components/Recipe-title/RecipeTitle';
import RecipePrepTime from './Form-components/Recipe-prepTime/RecipePrepTime';
import RecipeSteps from './Form-components/Recipe-steps/RecipeSteps';
import styles from './CreateRecipe.module.css';

const CreateRecipe = ({
    edit
}) => {

    const {
        previewImage,
        recipe,
        isFormValid,
        changeState,
    } = useRecipeContext();


    useEffect(() => {
        if (edit) {
            const data = {
                title: edit.title || '',
                description: edit.description || '',
                level: edit.level || 'Easy',
                cuisine: edit.cuisine || 'Moroccan',
                prepTime: edit.prepTime || '',
                cookTime: edit.cookTime || '',
                groups: edit.groups || [],
                images: edit.images || [],
                steps: edit.steps || [],
                ingredients: edit.ingredients || [],
            };
            changeState(data);
        }
    }, [edit]);

    const {recipeId} = useParams();
    const { user } = useAuthContext();
    const navigate = useNavigate();

    const submitData = () => {
        if (isFormValid()) {
            let data = recipe;

            if (previewImage.length > 0) {
                data = { ...recipe, previewImage }
            };
            if(edit){
            recipeService.update(data, recipeId, user.accessToken)
                .then(res => {
                    console.log(res)
                    // navigate
                })
                .catch((err) => {
                    console.log(err)
                });
            } else {
                recipeService.create(data, user.accessToken)
                .then(() => {
                    // navigate
                })
                .catch((err) => {
                    console.log(err)
                }); 
            }
        };
    };

    return (
        <section className={styles.profile__content}>
            <p className={styles.profile__content__text}>Create recipe</p>
            <div className={styles.create}>
                <section>
                    <form>
                        <fieldset>

                            <RecipeTitle />
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

                    </form>
                </section>
                <section className={styles.create__steps}>

                    <RecipeSteps />
                    <RecipeIngredients />

                </section>

                <button onClick={submitData} className={`${styles.button} ${styles.btn__primary}`}>
                    {edit
                        ? 'Update Recipe'
                        : 'Create Recipe'
                    }
                </button>
            </div>
        </section>



    );
};

export default CreateRecipe;
