import styles from './ImageHeader.module.css';

const ImageHeader = () => {

    return (
        <section className={styles.profile}>
            <article className={styles.profile__image}>
                <img src="/assets/images/user.webp"
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

export default ImageHeader;