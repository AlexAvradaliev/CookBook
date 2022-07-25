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