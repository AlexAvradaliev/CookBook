
import Recipe from '../Recipe-card/Recipe';
import styles from './RecipeList.module.css';

const RecipeList = () => {

    return (
        <section className={styles.recipes} id="recipes">
        <h1 className={styles.recipes__text}>Latest recipes</h1>
        <div>
        <Recipe />
            <Recipe />
            <Recipe />
            <Recipe />
            <Recipe />
            <Recipe />
            <Recipe />
            <Recipe />
            <Recipe />
            <Recipe />
            <Recipe />
            <Recipe />
            <Recipe />
            <Recipe />
            <Recipe />
            <Recipe />
        </div>
    </section>
    );
};

export default RecipeList;
