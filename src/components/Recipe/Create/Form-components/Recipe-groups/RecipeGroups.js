import ErrorMessage from '../../../../Common/Error-message/ErrorMessage';
import styles from './RecipeGroups.module.css';

const RecipeGroups = () => {

    return (
        <fieldset className={styles.create__groups}>
        <p className={styles.create__groups__p}>Select groups</p>
        <article>
        <div>
            <label className={styles.checkbox__container}>
                dairy
                <input type="checkbox" value="dairy" />
                <span className={styles.checkmark}></span>
            </label>
            <label className={styles.checkbox__container}>
                fruits
                <input type="checkbox" value="fruits" />
                <span className={styles.checkmark}></span>
            </label>
            <label className={styles.checkbox__container}>
                protein foods
                <input type="checkbox" value="protein foods" />
                <span className={styles.checkmark}></span>
            </label>
            <label className={styles.checkbox__container}>
                vegetables
                <input type="checkbox" value="vegetables" />
                <span className={styles.checkmark}></span>
            </label>
            <label className={styles.checkbox__container}>
                grains
                <input type="checkbox" value="grains" />
                <span className={styles.checkmark}></span>
            </label>
        </div>
        <ErrorMessage message='level'>error</ErrorMessage>
        </article>
    </fieldset>
    );
};

export default RecipeGroups;
