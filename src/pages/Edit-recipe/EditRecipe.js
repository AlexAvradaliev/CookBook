import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { RecipeProvider } from '../../components/Recipe/Create/context/recipeFormContext';
import * as recipeService from '../../servces/recipeService';

import Header from '../../components/Headers/Header/Header';
import Nav from '../../components/Nav/Nav';
import Main from '../../components/Common/Main/Main'

import styles from './EditRecipe.module.css';
import CreateRecipe from '../../components/Recipe/Create/CreateRecipe';

const EditRecipe = () => {

    const [recipe, setRecipe] = useState({})

    const { recipeId } = useParams();

    useEffect(() => {
        recipeService.getOneById(recipeId)
            .then((result) => {
                setRecipe(result)
            })

    }, [recipeId]);

    return (
        <>
            <Header>
                <Nav />
            </Header>
            <Main>
                <h2 className={styles.title}>Edit Recipe #{recipe?.title} </h2>
                <RecipeProvider>
                    <CreateRecipe edit={recipe} />
                </RecipeProvider>
            </Main>
        </>
    );
};

export default EditRecipe;