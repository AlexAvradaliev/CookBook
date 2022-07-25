import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import * as recipeService from '../../servces/recipeService';

import Cuisines from '../../components/Common/Cuisines/Cuisines';
import Groups from '../../components/Common/Groups/Groups';
import Main from '../../components/Common/Main/Main';
import HomeHeader from '../../components/Headers/Home-header/HomeHeader';
import HomeSearch from '../../components/Headers/Home-search/HomeSearch';
import Nav from '../../components/Nav/Nav';
import RecipeList from '../../components/Recipe/Recipe-list/RecipeList';
import styles from './Home.module.css';

const maxRecipes = 8;

const Home = () => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {

        recipeService.getAll('', 1)
            .then(res => setRecipes(res.recipes))
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <HomeHeader>
                <Nav homeStyles={true} />
                <HomeSearch />
            </HomeHeader>
            <Main>
                <Cuisines />
                <Groups />
                <section className={styles.recipes} id="recipes">
                    <h1 className={styles.recipes__text}>Latest recipes</h1>
                    <div>
                        <RecipeList recipes={recipes} maxRecipes={maxRecipes} />
                    </div>
                </section>
                <section className={styles.see__more}>
                    <Link className={`${styles.btn__lg} ${styles.btn__info}`} to="#">See more</Link>
                </section>
            </Main>
        </>
    );
};

export default Home;
