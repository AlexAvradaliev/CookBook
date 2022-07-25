import { useState ,useEffect } from 'react';

import { useAuthContext } from '../../../context/AuthContext';
import * as recipeService from '../../../servces/recipeService';

import AsideMenu from '../../../components/Aside-menu/AsideMenu';
import Main from '../../../components/Common/Main/Main';
import Header from '../../../components/Headers/Header/Header';
import Nav from '../../../components/Nav/Nav';
import ImageHeader from '../../../components/Profile/ImageHeader/ImageHeader';
import RecipeList from '../../../components/Recipe/Recipe-list/RecipeList';
import styles from './MyRecipe.module.css';

function MyRecipe() {

    const {user} = useAuthContext();

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        recipeService.getAllOwner(user.accessToken)
            .then(result => {
                setRecipes(result);	
            })
            .catch(err => {
                console.log(err);
            });
        }, [user.accessToken]);

    return (
        <>
            <Header>
                <Nav />
            </Header>


            <Main>
                <ImageHeader />

                <section className={styles.profile__grids}>
                    <AsideMenu />

                    <section className={styles.profile__content}>
                        <p className={styles.profile__content__text}>recipes</p>
                        <div className={styles.profile__content__container}>
                            <RecipeList recipes={recipes} />
                        </div>
                    </section>

                </section>

            </Main>
        </>
    )
};

export default MyRecipe;