import ErrorMessage from '../../../../Common/Error-message/ErrorMessage';
import styles from './RecipePrepTime.module.css';

const RecipePrepTime = () => {

    return (
        <article className={styles.prep__time__wrapper}>
            <input type="text" id="prepTime" className={styles.prep__time__wrapper__input} placeholder=" " />
            <label htmlFor="prepTime" className={styles.prep__time__wrapper__label}>Preparation time</label>
            <ErrorMessage message='text'>error</ErrorMessage>
        </article>
    );
};

export default RecipePrepTime;
