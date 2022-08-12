import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useRecipeContext } from '../../components/Recipe/Create/context/recipeFormContext';
import * as recipeService from '../../servces/recipeService';
import { useErrorsContext } from '../../context/ErrorsContext';
import { useAuthContext } from '../../context/AuthContext';

import Header from '../../components/Headers/Header/Header';
import Nav from '../../components/Nav/Nav';
import Main from '../../components/Common/Main/Main'
import CreateRecipe from '../../components/Recipe/Create/CreateRecipe';

import styles from './EditRecipe.module.css';

const EditRecipe = () => {

    const {recipe } = useRecipeContext();

    return (
        <>
            <Header>
                <Nav />
            </Header>
            <Main>
                <h2 className={styles.title}>Edit Recipe #{recipe?.title} </h2>
                    <CreateRecipe edit={true}/>
            </Main>
        </>
    );
};

export default EditRecipe;