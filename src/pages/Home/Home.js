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
import Skeleton from '../../components/Common/skeletons/Skeleton/Skeleton';
import SkeletonRecipe from '../../components/Common/skeletons/SkeletonRecipe/SkeletonRecipe';

import styles from './Home.module.css';

const maxRecipes = 8;

const Home = () => {

    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        recipeService.getAll('', 1)
            .then(res => {
                setRecipes(res.recipes);
                setLoading(false);
            })
            .catch(err => {
                setLoading(false);
                console.log(err);
            });
    }, []);

    const skeletonArr = [1, 2, 3, 4, 5, 6, 7, 8];

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
                    {loading
                        ? <>
                            <Skeleton type='title' />
                            <div className={styles.wrapper}>
                                {skeletonArr.map((i) => (
                                    <SkeletonRecipe key={i} />
                                ))}
                            </div>
                        </>
                        :      <>
                         <h1 className={styles.recipes__text}>Latest recipes</h1> 
                                 <div> 
                           <RecipeList recipes={recipes} maxRecipes={maxRecipes} /> 
                    </div>
                    </>
                    }
                </section>
                <section className={styles.see__more}>
                    <Link className={`${styles.btn__lg} ${styles.btn__info}`} to={'/search/?name=&page=1'}>See more</Link>
                </section>
            </Main>
        </>
    );
};

export default Home;
