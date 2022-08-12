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
        body: JSON.stringify({ rating })
    });
    const jsonRes = await response.json();

    if (response.ok) {
        return jsonRes;
    } else {
        let errors = {jsonRes, 'status': response.status};
        throw errors;
    };
};

export const getOwner = async (
    recipeId,
    token
) => {

    let response = await fetch(`${BASE_URL}/api/feedback/user/${recipeId}`, {
        headers: {
            'x-authorization': token
        }
    });

    let jsonRes = await response.json();
    if (response.ok) {
        return jsonRes;
    } else {
        let errors = {jsonRes, 'status': response.status};
        throw errors;
    };
};

export const update = async (data, token, recipeId) => {

    let response = await fetch(`${BASE_URL}/api/feedback/${recipeId}`, {
            method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'x-authorization': token
        },
        body: JSON.stringify(data)
    });
    let jsonRes = await response.json();
    if (response.ok) {
        return jsonRes;
    } else {
        let errors = {jsonRes, 'status': response.status};
        throw errors;
    };

};