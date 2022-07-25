import DataForm from './Forms/Data-form/DataForm';
import PasswordForm from './Forms/Password-form/PasswordForm';

import styles from './Edit.module.css';
import { useState } from 'react';

const Edit = () => {

    const [toggle, setToggle] = useState(false);
    const changeToggle = () =>{
        setToggle(state => !state)
    }

    return (
        <section className={styles.profile__content}>
            <div className={styles.profile__content__edit}>
                <article className={styles.main}>
                    <section className={styles.container}>
                        <p className={styles.profile__content__edit__text}>Edit account information</p>
                        <DataForm />
                        <div 
                        className={styles.btn__gray}
                        onClick={changeToggle}
                        >
                            Change password 
                            <i className={`fas fa-chevron-${toggle ? 'up' : 'down'
                      }`}></i>
                        </div>
                        {toggle
                        ? <PasswordForm />
                        : ''
                        }
                    </section>
                </article>
            </div>
        </section>
    );
};

export default Edit;