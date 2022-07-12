import styles from './RecipeSteps.module.css';

const RecipeSteps = (props) => {

    return (
        <article>
            <h2 className={styles.create__steps__text}>Steps</h2>
            <form>
                <div className={styles.input__wrapper}>
                    <span>
                        <i className="fas fa-plus"></i>
                    </span>
                    <input placeholder="Enter steps" type="text" />
                </div>
            </form>
            <ul className={styles.create__steps__ul}>
                <div>
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

export default RecipeSteps;
