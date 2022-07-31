import { createContext, useContext, useState } from 'react';

// import { inputEmail, inputText, confirmPassword } from '../../../utils/validation/validation';

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {

    const [previewImage, setPreviewImage] = useState([]);

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

    const changeRecipe = (name, value) => {
        setRecipe(state => ({
            ...state,
            [name]: value
        }));
    };

const changePreviewImage = (data) => {
    setPreviewImage(state => [...state, data])
};

const removePreviewImage = (data) => {
    setPreviewImage(data)
}

    const checkData = (name, value) => {
console.log({[name]: value})
    };

    return (
        <RecipeContext.Provider value={{previewImage, recipe, changeRecipe, checkData, changePreviewImage, removePreviewImage }}>
            {children}
        </RecipeContext.Provider>
    );
};

export const useRecipeContext = () => {
    const recipeState = useContext(RecipeContext);

    return recipeState;
};