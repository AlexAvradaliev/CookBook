import styles from'./Edit.module.css';

const Edit = () => {

    return (
        <section className={styles.profile__content}>
            <p className={styles.profile__content__text}>Edit profile</p>

            <div className={styles.profile__content__edit}>
                <p className={styles.profile__content__edit__text}>Edit account information</p>
                <form>
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <button className={`${styles.btn__primary} ${styles.btn__lg}`}>Update details</button>
                </form>
                <div className={styles.btn__gray}>Change password <i className="fas fa-chevron-up"></i>
                </div>
                <form className={styles.profile__content__edit__form}>
                    <input type="password" placeholder="Current password" className={styles.profile__content__edit__form__input} />
                    <input type="password" placeholder="New password" />
                    <input type="password" placeholder="Confirm password" />
                    <button className={`${styles.btn__primary} ${styles.btn__lg}`}>Change password </button>
                </form>

            </div>
        </section>
    );
};

export default Edit;