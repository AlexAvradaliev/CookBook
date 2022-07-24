import { createContext, useContext, useEffect, useState } from 'react';

import { KEY_LOCALSTORAGE } from '../constants/constants';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);
   
    useEffect(() => {
        try {
            const item = localStorage.getItem(KEY_LOCALSTORAGE)
            if(item){
                setUser(JSON.parse(item));
            }

        } catch (err) {
            return null;
        }
    }, []);

    useEffect(() => {
        try {
          user
           ? localStorage.setItem(KEY_LOCALSTORAGE, JSON.stringify(user))
           : localStorage.removeItem(KEY_LOCALSTORAGE)

        } catch (err) {
            return null;
        }
    }, [user]);


    const login = (authData) => {
        setUser(authData);
    }

    const register = (authData) => {
        setUser(authData);
    }

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const authState = useContext(AuthContext);

    return authState;
};