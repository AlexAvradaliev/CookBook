import { createContext, useContext } from 'react';

import { KEY_LOCALSTORAGE } from '../constants/constants';

import useLocalStorage from '../hooks/useLocalStorage';

const initialAuthState = {
    _id: '',
    email: '',
    firstName: '',
    lastName: '',
    accessToken: '',
};

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage(KEY_LOCALSTORAGE, initialAuthState);
    
    const login = (authData) => {
        setUser(authData);
    }
    const changeUserData = (authData) => {
        setUser(authData);
    };

    const changePhoto = (authData) => {
        setUser(authData);
    };

    const register = (authData) => {
        setUser(authData);
    };

    const logout = () => {
        setUser(initialAuthState);
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout, changeUserData, changePhoto, isAuthenticated: !!user.accessToken }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const authState = useContext(AuthContext);

    return authState;
};