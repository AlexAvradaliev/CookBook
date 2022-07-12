import styles from './RecipeIngredients.module.css';

const RecipeIngredients = (props) => {

    return (
        <article>
                        <h2 className={styles.create__ingredients__text}>Ingredients</h2>
                        <form>
                        <div className={styles.input__wrapper}>
                                <span>
                                    <i className="fas fa-plus"></i>
                                </span>
                                <input placeholder="Enter ingredients" type="text" />
                            </div>
                        </form>
                        <ul>
                            <div className={styles.create__ingredients__multiple}>
                                <li>
                                    <i className="fas fa-dot-circle"></i>{" "}
                                    Bring the 
                                </li>
                                <i className={`fas fa-times`}></i>
                            </div>
                        </ul>
                    </article>
    );
};

export default RecipeIngredients;
