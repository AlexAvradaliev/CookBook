import { BASE_URL } from './config';

export const getAll = async (term = '', page = '', category) => {
    if (category) {

        let result = await fetch(`${BASE_URL}/api/recipe/${category}&search=${term}&page=${page}`);
        let jsonResult = await result.json();
        return jsonResult;

    } else {

        let result = await fetch(`${BASE_URL}/api/recipe/?search=${term}&page=${page}`);
        let jsonResult = await result.json();
        return jsonResult;
    };

};

export const getOneById = async (id) => {
    try {
        let result = await fetch(`${BASE_URL}/api/recipe/${id}`);
    let jsonResult = await result.json();
    
    return jsonResult;
    } catch (err) {
        console.log(err);
    };
};

export const getAllOwner = async (token) => {

    let response = await fetch(`${BASE_URL}/api/recipe/owner`,{
        headers: {
            'content-type': 'application/json',
            'x-authorization': token
        },
    });

    let recipes = await response.json();
   
    let result = Object.values(recipes);

    return result;
};

export const create = async ( 
    data,
    token
     ) => {
   
    const response = await fetch(`${BASE_URL}/api/recipe`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'x-authorization': token
        },
        body: JSON.stringify(data)
    });
    const jsonRes = await response.json();
    
    if(response.ok){
        return jsonRes;
    } else{
        throw jsonRes;
    };  
};

export const update = async ( 
    data,
    recipeId,
    token
     ) => {
   
    const result = await fetch(`${BASE_URL}/api/recipe/${recipeId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'x-authorization': token
        },
        body: JSON.stringify(data)
    });
    const jsonRes = await result.json();
    
    if(result.ok){
        return jsonRes;
    } else{
        throw jsonRes.message;
    };  
};

export const removeRecipe = async (recipeId, token) => {

    let response = await fetch(`${BASE_URL}/api/recipe/${recipeId}`,{
        method: 'DELETE',
        headers: {
            'x-authorization': token
        },
    });
    const jsonRes = await response.json();
    return jsonRes;
};