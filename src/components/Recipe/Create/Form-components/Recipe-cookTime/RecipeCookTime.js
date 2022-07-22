import ErrorMessage from '../../../../Common/Error-message/ErrorMessage';
import styles from './RecipeCookTime.module.css';

const RecipeCookTime = () => {

    return (
        <article className={styles.cook__time__wrapper}>
            <input type="text" id="cookTime" className={styles.cook__time__wrapper__input} placeholder=" " />
            <label htmlFor="cookTime" className={styles.cook__time__wrapper__label}>Cooking time</label>
            <ErrorMessage message='text'>error</ErrorMessage>
        </article>
    );
};

export default RecipeCookTime;
