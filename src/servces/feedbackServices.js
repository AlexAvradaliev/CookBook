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
        throw jsonRes.message;
    };
};

export const getOwner = async (
    recipeId,
    token
) => {
    let result = await fetch(`${BASE_URL}/api/feedback/user/${recipeId}`, {
        headers: {
            'x-authorization': token
        }
    });

    let jsonResult = await result.json();
    return jsonResult;
};

export const update = async (data, token, recipeId) => {
    let result = await fetch(`${BASE_URL}/api/feedback/${recipeId}`, {
            method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'x-authorization': token
        },
        body: JSON.stringify(data)
    });
    let jsonResult = await result.json();
    return jsonResult;
};