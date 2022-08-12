import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import * as recipeService from '../../servces/recipeService';
import { useErrorsContext } from '../../context/ErrorsContext';
import { useAuthContext } from '../../context/AuthContext';

import Cuisines from '../../components/Common/Cuisines/Cuisines';
import Groups from '../../components/Common/Groups/Groups';
import Main from '../../components/Common/Main/Main';
import HomeHeader from '../../components/Headers/Home-header/HomeHeader';
import HomeSearch from '../../components/Headers/Home-search/HomeSearch';
import Nav from '../../components/Nav/Nav';
import RecipeList from '../../components/Recipe/Recipe-list/RecipeList';
import Skeleton from '../../components/Common/skeletons/Skeleton/Skeleton';
import SkeletonRecipe from '../../components/Common/skeletons/SkeletonRecipe/SkeletonRecipe';
import Meta from '../../components/Common/Meta/Meta';

import styles from './Home.module.css';

const maxRecipes = 8;

const Home = () => {

    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const { logout } = useAuthContext();
    const { addErrors } = useErrorsContext();
    const navigate = useNavigate();

    useEffect(() => {

        recipeService.getAll('', 1)
            .then(res => {
                setRecipes(res.recipes);
            })
            .catch(err => {
                if (err.status == 401) {
                    logout();
                    navigate('/');
                } else {
                    addErrors(err.jsonRes)
                    navigate('/404')
                };
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const skeletonArr = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <>
       
            <Meta
                title='Cook Book: Food, Recipe inspiration and Search'
                description='Discover, learn, and share recipes'
                keywords=
                'recipes, cooking, share food, foods, vegan recipes, international cuisines'
            />
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
                        : <>
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
