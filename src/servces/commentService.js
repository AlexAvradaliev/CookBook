import { BASE_URL } from './config';

export const create = async (
    text,
    recipeId,
    token
     ) => {
    const response = await fetch(`${BASE_URL}/api/comment/${recipeId}`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'x-authorization': token
        },
        body: JSON.stringify({text})
    });
    const jsonRes = await response.json();
    
    if(response.ok){
        return jsonRes;
    } else{
        throw jsonRes.message;
    };  
};