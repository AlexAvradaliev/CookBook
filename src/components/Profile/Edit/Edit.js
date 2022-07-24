import DataForm from './Forms/Data-form/DataForm';
import PasswordForm from './Forms/Password-form/PasswordForm';

import styles from './Edit.module.css';

const Edit = () => {

    return (
        <section className={styles.profile__content}>
            <div className={styles.profile__content__edit}>
                <article className={styles.main}>
                    <section className={styles.container}>
                        <p className={styles.profile__content__edit__text}>Edit account information</p>
                        <DataForm />
                        <div className={styles.btn__gray}>Change password <i className="fas fa-chevron-up"></i>
                        </div>
                        <PasswordForm />
                    </section>
                </article>
            </div>
        </section>
    );
};

export default Edit;