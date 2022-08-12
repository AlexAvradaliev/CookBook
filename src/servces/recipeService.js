import { BASE_URL } from './config';

export const getAll = async (term = '', page = '', category) => {
    if (category) {

        const response = await fetch(`${BASE_URL}/api/recipe/${category}&search=${term}&page=${page}`);
        const jsonRes = await response.json();
        if (response.ok) {
            return jsonRes;
        } else {
            let errors = { jsonRes, 'status': response.status };
            throw errors;
        };

    } else {

        const response = await fetch(`${BASE_URL}/api/recipe/?search=${term}&page=${page}`);
        const jsonRes = await response.json();
        if (response.ok) {
            return jsonRes;
        } else {
            let errors = { jsonRes, 'status': response.status };
            throw errors;
        };
    };

};

export const getOneById = async (id) => {

    if(id.length !== 24){
        throw { 'status': 404, 'jsonRes': ['Page not found']};
    }else {
        
        const response = await fetch(`${BASE_URL}/api/recipe/${id}`);
        const jsonRes = await response.json();
        
        if (response.ok) {
            return jsonRes;
        } else {
            let errors = { jsonRes, 'status': response.status };
            throw errors;
        };
    };
};

export const getAllOwner = async (token) => {

    const response = await fetch(`${BASE_URL}/api/recipe/owner`, {
        headers: {
            'content-type': 'application/json',
            'x-authorization': token
        },
    });

    const recipes = await response.json();

    const jsonRes = Object.values(recipes);

    if (response.ok) {
        return jsonRes;
    } else {
        let errors = { jsonRes, 'status': response.status };
        throw errors;
    };
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

    if (response.ok) {
        return jsonRes;
    } else {
        let errors = { jsonRes, 'status': response.status };
        throw errors;
    };
};

export const update = async (
    data,
    recipeId,
    token
) => {

    if(recipeId.length !== 24){
        throw { 'status': 404, 'jsonRes': ['Page not found']};
    }else {
        const response = await fetch(`${BASE_URL}/api/recipe/${recipeId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'x-authorization': token
            },
            body: JSON.stringify(data)
        });
        const jsonRes = await response.json();
    
        if (response.ok) {
            return jsonRes;
        } else {
            let errors = { jsonRes, 'status': response.status };
            throw errors;
        };
    };
};

export const removeRecipe = async (recipeId, token) => {

    if(recipeId.length !== 24){
        throw { 'status': 404, 'jsonRes': ['Page not found']};
    } else {
        const response = await fetch(`${BASE_URL}/api/recipe/${recipeId}`, {
            method: 'DELETE',
            headers: {
                'x-authorization': token
            },
        });
        const jsonRes = await response.json();
        if (response.ok) {
            return jsonRes;
        } else {
            let errors = { jsonRes, 'status': response.status };
            throw errors;
        };
    };
};