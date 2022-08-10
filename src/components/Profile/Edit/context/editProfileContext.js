import { createContext, useContext, useState } from 'react';

import { inputEmail, inputText, confirmPassword } from '../../../../utils/validation/validation';
import { addErrorProperties, removeErrorProperties } from '../../../../utils/contextFunctions/contextFunctions';

export const EditProfileContext = createContext();

export const EditProfileProvider = ({ children }) => {

    const [errorsPasswords, setErrorsPasswords] = useState({});
    const [errorsServerPasswords, setErrorsServerPasswords] = useState(null);
    const [passwords, setPasswords] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword:'',
    });
    const [errors, setErrors] = useState({});
    const [errorsServer, setErrorsServer] = useState(null);
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
    });

    const getData = (data) => {
        setUserData(data);
    };

    const userChange = (name, value, type) => {
        if (type === 'user') {
            setUserData(state => ({
                ...state,
                [name]: value
            }));
            setErrorsServer(null);
        } else {
            setPasswords(state => ({
                ...state,
                [name]: value
            }));
            setErrorsServerPasswords(null);
        };
    };

    const checkData = (name, value, type) => {
        if (type === 'user') {
            if (name === 'email') {
                const result = inputEmail(name, value);
                result
                    ? setErrors(state => addErrorProperties(state, name, result))
                    : setErrors(state => removeErrorProperties(state, name));
                return result;
            } else {
                const result = inputText(name, value);
                result
                    ? setErrors(state => addErrorProperties(state, name, result))
                    : setErrors(state => removeErrorProperties(state, name));
                return result;
            };
        } else {
             if (name === 'confirmPassword') {
                const result = confirmPassword(name, value, passwords.newPassword);
                result
                    ? setErrorsPasswords(state => addErrorProperties(state, name, result))
                    : setErrorsPasswords(state => removeErrorProperties(state, name));
                return result;
            } else {
                const result = inputText(name, value);
                result
                    ? setErrorsPasswords(state => addErrorProperties(state, name, result))
                    : setErrorsPasswords(state => removeErrorProperties(state, name));
                return result;
            };
        };

    };

    const isFormValid = (type) => {
        let isValid = false;
        if (type === 'user') {
            Object.entries(userData).map(x => {
                const name = x[0];
                const value = x[1];

                const result = checkData(name, value, type);

                if (result) {
                    isValid = true;
                };
                return null;
            });
        } else {

            Object.entries(passwords).map(x => {
                const name = x[0];
                const value = x[1];

                const result = checkData(name, value);
                if (result) {
                    isValid = true;
                };
                return null;
            });
        }

        if (isValid || errorsServer) {
            return false;
        } else {
            return true;
        };
    };

    const addErrorServer = (err, type) => {
        console.log(err)
        type === 'user'
        ? setErrorsServer(err)
        : setErrorsServerPasswords(err)
    };

    return (
        <EditProfileContext.Provider value={{
             userData,
              userChange,
               checkData,
                isFormValid,
                 errors,
                  errorsServer,
                   addErrorServer,
                    getData,
                    passwords,
                    errorsServerPasswords,
                    errorsPasswords
                     }}>
            {children}
        </EditProfileContext.Provider>
    );
};

export const useEditProfileContext = () => {
    const editProfileState = useContext(EditProfileContext);

    return editProfileState;
};