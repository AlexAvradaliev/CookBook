import { createContext, useContext, useState } from 'react';

import { inputEmail, inputText, confirmPassword } from '../../../utils/validation/validation';

export const RegisterContext = createContext();

const removeErrorProperties = (oldState, name) => {
    const state = { ...oldState };
    delete state[name];
    return state;
};

const addErrorProperties = (oldState, name, result) => {
    const state = ({ ...oldState, [name]: result[name] });
    return state;
};

export const RegisterProvider = ({ children }) => {

    const [errors, setErrors] = useState({});
    const [errorsServer, setErrorsServer] = useState(null);
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        repassword: '',
    });

    const userChange = (name, value) => {
        setUser(state => ({
            ...state,
            [name]: value
        }));
        setErrorsServer(null);
    };

    const checkData = (name, value) => {
        if (name == 'email') {

            const result = inputEmail(name, value);

            result
                ? setErrors(state => addErrorProperties(state, name, result))
                : setErrors(state => removeErrorProperties(state, name));
            return result;

        } else if (name == "repassword") {

            const result = confirmPassword(name, value, user?.password);

            result
                ? setErrors(state => addErrorProperties(state, name, result))
                : setErrors(state => removeErrorProperties(state, name));
            return result;

        } else {
            
            const result = inputText(name, value);

            result
                ? setErrors(state => addErrorProperties(state, name, result))
                : setErrors(state => removeErrorProperties(state, name));
        }
    };

    const isFormValid = () => {
        let isValid = false;

        Object.entries(user).map(x => {
            const name = x[0];
            const value = x[1];

            const result = checkData(name, value);
            if (result) {
                isValid = true;
            };
        });

        if (isValid || errorsServer) {
            return false;
        } else {
            return true;
        };
    };

    const addErrorServer = (err) => {
        setErrorsServer(err);
    };

    return (
        <RegisterContext.Provider value={{ user, userChange, checkData, isFormValid, errors, errorsServer, addErrorServer }}>
            {children}
        </RegisterContext.Provider>
    );
};

export const useRegisterContext = () => {
    const registerState = useContext(RegisterContext);

    return registerState;
};