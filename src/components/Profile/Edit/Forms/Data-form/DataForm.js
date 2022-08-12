import { useEffect } from 'react';

import { useAuthContext } from '../../../../../context/AuthContext';
import { useEditProfileContext } from '../../context/editProfileContext';
import * as authService from '../../../../../servces/authService';

import ErrorMessage from '../../../../Common/Error-message/ErrorMessage';
import styles from './DataForm.module.css';
import Meta from '../../../../Common/Meta/Meta';

const DataForm = () => {
    const { user, changeUserData } = useAuthContext();

    const {
        userData,
        userChange,
        checkData,
        isFormValid,
        errors,
        errorsServer,
        addErrorServer,
        getData
    } = useEditProfileContext();

    useEffect(() => {
        const firstName = user?.firstName
        const lastName = user?.lastName
        const email = user?.email
        getData({
            firstName,
            lastName,
            email,
        });
    }, [ user, getData]);

    const changeHandler = (e) => {
        userChange(e.target.name, e.target.value, 'user');
    };

    const verifyField = (e) => {
        checkData(e.target.name, e.target.value, 'user');
    };

    const submitHandler = (e) => {
        e.preventDefault();

        if (isFormValid('user')) {
            authService.changeUserData(userData, user.accessToken)
            .then((authData) => {
                changeUserData(authData);
            })
            .catch((err) => {
                addErrorServer(err,'user');
            });
        };
    };

    return (
        <>
        {/* <Meta
        title={`Cook Book | ${user && user.firstName} ${
          user && user.lastName
        }`} */}
      {/* /> */}
        <form
            method='POST'
            onSubmit={submitHandler}
            className={styles.content}
        >

            <section className={styles.user__details}>

                <article className={styles.input__box}>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        className={styles.form__input}
                        placeholder=" "
                        onChange={changeHandler}
                        value={userData?.firstName}
                        onBlur={verifyField}
                    />
                    <label htmlFor="firstName" className={styles.form__label}>First name</label>
                    {errorsServer?.firstName
                        ? <ErrorMessage message='text'>{errorsServer.firstName[0]}</ErrorMessage>
                        : ''
                    }
                    {errors?.firstName
                        ? <ErrorMessage message='text'>{errors.firstName[0]}</ErrorMessage>
                        : ''
                    }
                </article>

                <article className={styles.input__box}>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        className={styles.form__input}
                        placeholder=" "
                        onChange={changeHandler}
                        value={userData?.lastName}
                        onBlur={verifyField}
                    />
                    <label htmlFor="lastName" className={styles.form__label}>Last name</label>
                    {errorsServer?.lastName
                        ? <ErrorMessage message='text'>{errorsServer.lastName[0]}</ErrorMessage>
                        : ''
                    }
                    {errors?.lastName
                        ? <ErrorMessage message='text'>{errors.lastName[0]}</ErrorMessage>
                        : ''
                    }
                </article>
                <article className={styles.input__box}>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        className={styles.form__input}
                        placeholder=" "
                        onChange={changeHandler}
                        value={userData?.email}
                        onBlur={verifyField}
                    />
                    <label htmlFor="email" className={styles.form__label}>Email</label>
                    {errorsServer?.email
                        ? <ErrorMessage message='text'>{errorsServer.email[0]}</ErrorMessage>
                        : ''
                    }
                    {errors?.email
                        ? <ErrorMessage message='text'>{errors.email[0]}</ErrorMessage>
                        : ''
                    }
                </article>
            </section>

            <button className={styles.button}>Update details</button>
        </form>
        </>
    );
};

export default DataForm;