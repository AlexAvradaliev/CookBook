import styles from './RecipePrepTime.module.css';

const RecipePrepTime = (props) => {

    return (
        <label htmlFor="prepTime">
            <p className={styles.create__times__p}>Preparation time</p>
            <input name="prepTime" type="text" placeholder="Ente preparation time" />
        </label>
    );
};

export default RecipePrepTime;
