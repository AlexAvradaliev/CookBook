import ErrorMessage from '../../Common/Error-message/ErrorMessage';
import styles from './Edit.module.css';

const Edit = () => {

    return (
        <section className={styles.profile__content}>
            <div className={styles.profile__content__edit}>
                <article className={styles.main}>
                    <section className={styles.container}>
                        <p className={styles.profile__content__edit__text}>Edit account information</p>
                        <form className={styles.content}>

                            <section className={styles.user__details}>

                                <article className={styles.input__box}>
                                    <input type="text" id="firstName" className={styles.form__input} placeholder=" " autoComplete='off' />
                                    <label htmlFor="firstName" className={styles.form__label}>First name</label>
                                <ErrorMessage>text</ErrorMessage>
                                </article>

                                <article className={styles.input__box}>
                                    <input type="text" id="lastName" className={styles.form__input} placeholder=" " />
                                    <label htmlFor="lastName" className={styles.form__label}>Last name</label>
                                <ErrorMessage>text</ErrorMessage>
                                </article>
                                <article className={styles.input__box}>
                                    <input type="text" id="email" className={styles.form__input} placeholder=" " autoComplete='off' />
                                    <label htmlFor="email" className={styles.form__label}>Email</label>
                                <ErrorMessage>text</ErrorMessage>
                                </article>
                            </section>

                            <button className={styles.button}>Update details</button>
                        </form>
                        <div className={styles.btn__gray}>Change password <i className="fas fa-chevron-up"></i>
                        </div>
                        <form className={styles.content}>

                            <section className={styles.user__details}>
                                <article className={styles.input__box}>
                                    <input type="password" id="currentPassword" className={styles.form__input} placeholder=" " autoComplete='off' />
                                    <label htmlFor="currentPassword" className={styles.form__label}>Current password</label>
                                <ErrorMessage>text</ErrorMessage>
                                </article>

                                <article className={styles.input__box}>
                                    <input type="password" id="newPassword" className={styles.form__input} placeholder=" " />
                                    <label htmlFor="newPassword" className={styles.form__label}>New password</label>
                                <ErrorMessage>text</ErrorMessage>
                                </article>
                                
                                <article className={styles.input__box}>
                                    <input type="password" id="confirmPassword" className={styles.form__input} placeholder=" " autoComplete='off' />
                                    <label htmlFor="confirmPassword" className={styles.form__label}>Confirm password</label>
                                <ErrorMessage>text</ErrorMessage>
                                </article>
                            </section>

                            <button className={styles.button}>Update details</button>
                        </form>
                    </section>
                </article>
            </div>
        </section>
    );
};

export default Edit;