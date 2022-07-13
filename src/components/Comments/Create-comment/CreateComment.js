import styles from './CreateComment.module.css';

const CreateComment = () => {

    return (
<section className={styles.create__comment}>
<p>Give it a comment</p>
<form>
    <textarea rows="2" placeholder="Comment text"></textarea>
    <button type="submit" className={`${styles.btn} ${styles.btn__primary}`}>Submit comment</button>
</form>
</section>
 );
};

export default CreateComment;