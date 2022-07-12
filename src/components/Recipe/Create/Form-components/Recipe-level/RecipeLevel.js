import styles from './RecipeLevel.module.css';

const RecipeLevel = (props) => {

    return (
        <label htmlFor="level">
            Select level
            <select name="level">
                <option value="Easy">Easy</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
            </select>
        </label>
    );
};

export default RecipeLevel;
