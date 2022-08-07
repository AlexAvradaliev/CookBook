import { BASE_URL } from './config';

export const getAllByRecipe = async (recipeId, token) => {

    let response = await fetch(`${BASE_URL}/api/comment/recipe/${recipeId}`, {
        headers: {
            'x-authorization': token
        }
    });

    let comments = await response.json();
    return comments;
    
};

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

export const getAllOwner = async (token) => {

    let response = await fetch(`${BASE_URL}/api/comment`,{
        headers:{
            'x-authorization': token,
        }
    });

    let comments = await response.json();
    let result = Object.values(comments);
    return result;
};

export const edit = async(data, commentId, token) => {

    let response = await fetch(`${BASE_URL}/api/comment/${commentId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'x-authorization': token
        },
        body: JSON.stringify({text: data})
    });

    const jsonRes = await response.json();
    return jsonRes;
};

export const remove = async (commentId, token) => {

    let response = await fetch(`${BASE_URL}/api/comment/${commentId}`,{
        method: 'DELETE',
        headers: {
            'x-authorization': token
        },
    });
    const jsonRes = await response.json();
    return jsonRes;
};