import { BASE_URL } from './config';

export const avatar = async ( 
    data,
    token
     ) => {
    const response = await fetch(`${BASE_URL}/api/upload/avatar`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'x-authorization': token
        },
        body: JSON.stringify({data})
    });
    const jsonRes = await response.json();
    if(response.ok){
        return jsonRes;
    } else{
        throw jsonRes.message;
    };  
};


export const removeImage = async(
    image,
    recipeId,
    token
) => {
    const response = await fetch(`${BASE_URL}/api/upload/${recipeId}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            'x-authorization': token
        },
        body: JSON.stringify({image})
    });
    const jsonRes = await response.json();
    if(response.ok){
        return jsonRes;
    } else{
        throw jsonRes.message;
    };  
};