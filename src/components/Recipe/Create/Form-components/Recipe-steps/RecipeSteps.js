import { useState } from 'react';

import { useRecipeContext } from '../../context/recipeFormContext';

import ErrorMessage from '../../../../Common/Error-message/ErrorMessage';
import styles from './RecipeSteps.module.css';

const RecipeSteps = () => {

    
    const [step, setStep] = useState('');

    const {
        errors,
        recipe,
        changeRecipe,
    } = useRecipeContext();

    const changeStep = (e) => {
        setStep(e.target.value);
    };

    const addSteps = (e) => {
        e.preventDefault();
        changeRecipe('steps', [...recipe.steps, step]);
        setStep('');
    };

    const removeSteps = (step) => {
        const stepsCopy = [...recipe.steps];
        const newSteps = stepsCopy.filter((x) => x !== step);
        changeRecipe('steps', newSteps);
    };

    return (
        <article>
            <form onSubmit={addSteps}>

            <div className={styles.steps__wrapper}>
                <input
                    type="text"
                    name="steps"
                    id="steps"
                    className={styles.steps__wrapper__input}
                    placeholder=" "
                    value={step}
                    onChange={changeStep}
                />
                <i className="fas fa-plus" onClick={addSteps}></i>
                <label htmlFor="steps" className={styles.steps__wrapper__label}>Steps</label>
            </div>
            {errors.steps &&
            <ErrorMessage >{errors.steps[0]}</ErrorMessage>
        }

            </form>
            {recipe.steps?.length > 0 &&
            (<ul className={styles.create__steps__ul}>
                {recipe.steps?.map((step, index) => (
                <li key={step + index}>
                    <div>
                        <i className="fas fa-dot-circle"></i>{" "}
                        <p>{" "}{step}</p>
                    </div>
                    <i className={`fas fa-times`} onClick={() => removeSteps(step)}></i>
                </li>
                ))}
            </ul>
            )}
        </article>
    );
};

export default RecipeSteps;
