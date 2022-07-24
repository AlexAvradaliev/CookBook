import { BASE_URL } from './config';

export const login = async(userData) => {

     const response = await fetch(`${BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify( userData )
    });
    const jsonRes = await response.json();
    if(response.ok){
        return jsonRes;
    } else{
        throw jsonRes;
    };  
};

export const logout = async(token) => {

    
    const response= await fetch(`${BASE_URL}/api/auth/logout`, {
        headers: {
            'x-authorization': token
        }
    });
 
    return response;
};

export const register = async(userData) => {
    const response = await fetch(`${BASE_URL}/api/auth/register`, {
       method: 'POST',
       headers: {
           'content-type': 'application/json'
       },
       body: JSON.stringify( userData )

   });

   const jsonRes = await response.json();
    return jsonRes;
};

export const changeUserData = async(userData, token) => {

    const response = await fetch(`${BASE_URL}/api/auth/changeUserData`, {
        method: 'PATCH',
       headers: {
           'content-type': 'application/json',
           'x-authorization': token
       },
       body: JSON.stringify( userData )
   });
   const jsonRes = await response.json();
   return jsonRes;
};

export const changePassword = async(data, token) => {

    const response = await fetch(`${BASE_URL}/api/auth/changePassword`, {
        method: 'PATCH',
       headers: {
           'content-type': 'application/json',
           'x-authorization': token
       },
       body: JSON.stringify( data )
   });
   const jsonRes = await response.json();
   return jsonRes;
};