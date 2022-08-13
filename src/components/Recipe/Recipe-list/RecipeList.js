import { memo } from 'react';
import Recipe from '../Recipe-card/Recipe';

const RecipeList = ({
    recipes,
    maxRecipes,
    deleteHandler
}) => {

    return (
        <>
           {maxRecipes
           ? recipes.slice(0,maxRecipes).map(x => <Recipe key={x._id} recipeInfo={x} />)
           : recipes.map(x => <Recipe key={x._id} recipeInfo={x} deleteHandler={deleteHandler} />)
           }
        </>
    );
};

export default memo(RecipeList);
