import styles from './Edit.module.css';

const Edit = () => {

    return (
        <section className={styles.profile}>
            <article className={styles.profile__image}>
                <img src="assets/images/alex.jpg"
                    alt="Alex" />
                <p>Alex Alex </p>
                <label>
                    <input type="file" />
                    <i className="fas fa-camera fa-2x"></i>
                </label>
            </article>
        </section>
    );
};

export default Edit;