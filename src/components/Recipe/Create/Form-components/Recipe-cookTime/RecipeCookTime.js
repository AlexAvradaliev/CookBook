import styles from './RecipeCookTime.module.css';

const RecipeCookTime = (props) => {

    return (
        <label htmlFor="cookTime">
            <p className={styles.create__times__p}>Cooking time</p>
            <input type="text" placeholder="Ente cooking time" />
        </label>
    );
};

export default RecipeCookTime;
