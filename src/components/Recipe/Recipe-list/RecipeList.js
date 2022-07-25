import Recipe from '../Recipe-card/Recipe';

const RecipeList = ({
    recipes,
    maxRecipes
}) => {

    return (
        <>
           {maxRecipes
           ? recipes.slice(0,maxRecipes).map(x => <Recipe key={x._id} recipeInfo={x} />)
           : recipes.map(x => <Recipe key={x._id} recipeInfo={x} />)
           }
        </>
    );
};

export default RecipeList;
