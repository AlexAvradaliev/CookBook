import { createContext, useContext, useState } from 'react';


export const ErrorsContext = createContext();

export const ErrorsProvider = ({ children }) => {

    const [errors, setErrors] = useState(null);
 
    const addErrors = (err) => {
        setErrors(err);
    };

    return (
        <ErrorsContext.Provider value={{ addErrors, errors }}>
            {children}
        </ErrorsContext.Provider>
    );
};

export const useErrorsContext = () => {
    const errorsState = useContext(ErrorsContext);

    return errorsState;
};