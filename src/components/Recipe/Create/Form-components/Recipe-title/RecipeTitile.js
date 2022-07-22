import ErrorMessage from '../../../../Common/Error-message/ErrorMessage';
import styles from './RecipeTitile.module.css';

const RecipeName = () => {

    return (
        <article className={styles.title__wrapper}>
            <input type="text" id="title" className={styles.title__wrapper__input} placeholder=" " />
            <label htmlFor="title" className={styles.title__wrapper__label}>Title</label>
            <ErrorMessage message='text'>error</ErrorMessage>
        </article>
    );
};

export default RecipeName;
