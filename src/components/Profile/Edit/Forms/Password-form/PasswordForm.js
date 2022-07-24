import { useEditProfileContext } from '../../context/editProfileContext';
import { useAuthContext } from '../../../../../context/AuthContext';
import * as authService from '../../../../../servces/authService';

import ErrorMessage from '../../../../Common/Error-message/ErrorMessage';
import styles from './PasswordForm.module.css';

const PasswordForm = () => {
    const { user } = useAuthContext();
    const {
        userChange,
        checkData,
        isFormValid,
        addErrorServer,
        passwords,
        errorsServerPasswords,
        errorsPasswords
    } = useEditProfileContext();
                
console.log(errorsPasswords)
    const changeHandler = (e) => {
        userChange(e.target.name, e.target.value);
    };

    const verifyField = (e) => {
        checkData(e.target.name, e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();

        if (isFormValid()) {
            authService.changePassword(passwords, user.accessToken)
            .catch((err) => {
                addErrorServer(err);
            });
        };
    };

    return (
        <form
            method='POST'
            onSubmit={submitHandler}
            className={styles.content}
        >

            <section className={styles.user__details}>
                <article className={styles.input__box}>
                    <input
                        type="password"
                        name="currentPassword"
                        id="currentPassword"
                        className={styles.form__input}
                        placeholder=" "
                        onChange={changeHandler}
                        value={passwords?.currentPassword}
                        onBlur={verifyField}
                    />
                    <label htmlFor="currentPassword" className={styles.form__label}>Current password</label>
                    {errorsPasswords?.currentPassword
                        ? <ErrorMessage message='text'>{errorsPasswords.currentPassword[0]}</ErrorMessage>
                        : ''
                    }
                    {errorsServerPasswords?.password
                        ? <ErrorMessage message='text'>{errorsServerPasswords.password[0]}</ErrorMessage>
                        : ''
                    }
                </article>

                <article className={styles.input__box}>
                    <input
                        type="password"
                        name='newPassword'
                        id="newPassword"
                        className={styles.form__input}
                        placeholder=" "
                        onChange={changeHandler}
                        value={passwords?.newPassword}
                        onBlur={verifyField}
                    />
                    <label htmlFor="newPassword" className={styles.form__label}>New password</label>
                    {errorsPasswords?.newPassword
                        ? <ErrorMessage message='text'>{errorsPasswords.newPassword[0]}</ErrorMessage>
                        : ''
                    }
                    {errorsServerPasswords?.newPassword
                        ? <ErrorMessage message='text'>{errorsServerPasswords.newPassword[0]}</ErrorMessage>
                        : ''
                    }
                </article>

                <article className={styles.input__box}>
                    <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        className={styles.form__input}
                        placeholder=" "
                        onChange={changeHandler}
                        value={passwords?.confirmPassword}
                        onBlur={verifyField}
                    />
                    <label htmlFor="confirmPassword" className={styles.form__label}>Confirm password</label>
                    {errorsPasswords?.confirmPassword
                        ? <ErrorMessage message='text'>{errorsPasswords.confirmPassword[0]}</ErrorMessage>
                        : ''
                    }
                    {errorsServerPasswords?.confirmPassword
                        ? <ErrorMessage message='text'>{errorsServerPasswords.confirmPassword[0]}</ErrorMessage>
                        : ''
                    }
                </article>
            </section>

            <button className={styles.button}>Update details</button>
        </form>
    );
};

export default PasswordForm;