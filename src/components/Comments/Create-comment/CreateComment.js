import styles from './CreateComment.module.css';

const CreateComment = () => {

    return (
<section className={styles.create__comment}>
<form>
     <article className={styles.createComment__wrapper}>
            <textarea type="text" id="createComment" className={styles.createComment__wrapper__input} placeholder=" " rows={4} />
            <label htmlFor="createComment" className={styles.createComment__wrapper__label}>Give it a comment</label>
        </article>
        <button className={styles.button}>Comment</button>
    
</form>
</section>
 );
};

export default CreateComment;