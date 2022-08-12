import { createContext, useContext, useState } from 'react';

import { inputText, arrayField, imagesField, inputNumber, imagesType } from '../../../../utils/validation/validation';

export const RecipeContext = createContext();
const removeErrorProperties = (oldState, name) => {
    const state = { ...oldState };
    delete state[name];
    return state;
};

const addErrorProperties = (oldState, name, result) => {
    const state = ({ ...oldState, [name]: result[name] });
    return state;
};

export const RecipeProvider = ({ children }) => {

    const [previewImage, setPreviewImage] = useState([]);

    const [errors, setErrors] = useState({});

    const [recipe, setRecipe] = useState({
        title: '',
        description: '',
        level: 'Easy',
        cuisine: 'Moroccan',
        prepTime: '',
        cookTime: '',
        groups: [],
        images: [],
        steps: [],
        ingredients: [],
    });

    const changeState = (data) => {
        setRecipe(data);
    };

    const changeRecipe = (name, value) => {
        setRecipe(state => ({
            ...state,
            [name]: value
        }));
        setErrors(state => removeErrorProperties(state, name));
    };

    const changePreviewImage = (data) => {
        setPreviewImage(state => [...state, data])
    };

    const removePreviewImage = (data) => {
        setPreviewImage(data)
    }

    const checkData = (name, value) => {

        if (name === 'images' || name === 'previewImage') {
           
            const result = imagesField(Number(previewImage.length) + Number(recipe.images.length));

            result
                ? setErrors(state => addErrorProperties(state, name, result))
                : setErrors(state => removeErrorProperties(state, name));
            
                return result;

        } else if (name === 'prepTime' || name === 'cookTime') {
            const result = inputNumber(name, value);

            result
                ? setErrors(state => addErrorProperties(state, name, result))
                : setErrors(state => removeErrorProperties(state, name));
            return result;

        } else if (Array.isArray(value)) {
            const result = arrayField(name, value);

            result
                ? setErrors(state => addErrorProperties(state, name, result))
                : setErrors(state => removeErrorProperties(state, name));
            return result;
        } else if(value === 'string') {

            const result = inputText(name, value);


            result
                ? setErrors(state => addErrorProperties(state, name, result))
                : setErrors(state => removeErrorProperties(state, name));
            return result;

        };
    };

    const checkMimeType = (name, type) => {
        const result = imagesType(name, type);

        result
            ? setErrors(state => addErrorProperties(state, name, result))
            : setErrors(state => removeErrorProperties(state, name));
        return result;
    };

    const isFormValid = () => {
        let isValid = false;

        Object.entries(recipe).map(x => {
            const name = x[0];
            const value = x[1];

            const result = checkData(name, value);
            if (result) {
                isValid = true;
            };
            return  null;
        });

       return !isValid
    };

    return (
        <RecipeContext.Provider value={{
            errors,
            previewImage,
            recipe,
            changeRecipe,
            checkData,
            changePreviewImage,
            removePreviewImage,
            checkMimeType,
            isFormValid,
            changeState
        }}>
            {children}
        </RecipeContext.Provider>
    );
};

export const useRecipeContext = () => {
    const recipeState = useContext(RecipeContext);

    return recipeState;
};