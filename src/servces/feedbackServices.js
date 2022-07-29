import { BASE_URL } from './config';

export const create = async (
    rating,
    recipeId,
    token
     ) => {
    const response = await fetch(`${BASE_URL}/api/feedback/${recipeId}`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'x-authorization': token
        },
        body: JSON.stringify({rating})
    });
    const jsonRes = await response.json();
    
    if(response.ok){
        return jsonRes;
    } else{
        throw jsonRes.message;
    };  
};