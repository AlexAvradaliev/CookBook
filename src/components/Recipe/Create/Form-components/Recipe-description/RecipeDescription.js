import ErrorMessage from '../../../../Common/Error-message/ErrorMessage';
import styles from './RecipeDescription.module.css';

const RecipeDescription = () => {

    return (
        <article className={styles.description__wrapper}>
            <textarea type="text" id="description" className={styles.description__wrapper__input} placeholder=" " rows={4} />
            <label htmlFor="description" className={styles.description__wrapper__label}>Description</label>
            <ErrorMessage message='text'>error</ErrorMessage>
        </article>
    );
};

export default RecipeDescription;
