import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { RecipeProvider } from '../../components/Recipe/Create/context/recipeFormContext';
import * as recipeService from '../../servces/recipeService';
import { useErrorsContext } from '../../context/ErrorsContext';
import { useAuthContext } from '../../context/AuthContext';

import Header from '../../components/Headers/Header/Header';
import Nav from '../../components/Nav/Nav';
import Main from '../../components/Common/Main/Main'
import CreateRecipe from '../../components/Recipe/Create/CreateRecipe';

import styles from './EditRecipe.module.css';

const EditRecipe = () => {

    const [recipe, setRecipe] = useState({});
    const {logout} = useAuthContext();
    const {addErrors} = useErrorsContext();
    const navigate = useNavigate();

    const { recipeId } = useParams();

    useEffect(() => {
        recipeService.getOneById(recipeId)
            .then((result) => {
                setRecipe(result)
            })
            .catch((err) => {
                if (err.status == 401) {
                    logout();
                    navigate('/');
                } else {
                    addErrors(err.jsonRes)
                    navigate('/404')
                };
            });

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