import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useErrorsContext } from '../../../context/ErrorsContext';
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
import Loader from '../../Common/Loader/Loader';
import Meta from '../../Common/Meta/Meta';

const CreateRecipe = ({
    edit
}) => {

    const { addErrors } = useErrorsContext()

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

    const { recipeId } = useParams();
    const { user, logout } = useAuthContext();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const submitData = () => {

        if (isFormValid()) {
            let data = recipe;

            if (previewImage.length > 0) {
                data = { ...recipe, previewImage }
            };
            setLoading(true);
            if (edit) {
                recipeService.update(data, recipeId, user.accessToken)
                    .then(() => {
                        navigate('/profile');
                    })
                    .catch((err) => {
                        if (err.status == 401) {
                            logout();
                            navigate('/');
                        } else {
                            addErrors(err.jsonRes)
                            navigate('/404')
                        };
                    })
                    .finally(() => {
                        setLoading(false);
                    });
            } else {
                recipeService.create(data, user.accessToken)
                    .then(() => {
                        navigate('/profile');
                    })
                    .catch((err) => {
                        if (err.status == 401) {
                            logout();
                            navigate('/');
                        } else {
                            addErrors(err.jsonRes)
                            navigate('/404')
                        };
                    })
                    .finally(() => {
                        setLoading(false);
                    });
            };
        };
    };

    return (
        <>

            {/* <Meta
        title={`Cook Book | ${user && user.firstName} ${
          user && user.lastName
        }`}
      /> */}

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

                    {loading &&
                        <Loader />
                    }

                    <button onClick={submitData} className={`${styles.button} ${styles.btn__primary}`}>
                        {edit
                            ? 'Update Recipe'
                            : 'Create Recipe'
                        }
                    </button>
                </div>
            </section>
        </>
    );
};

export default CreateRecipe;
