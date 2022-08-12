import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthContext } from '../../../context/AuthContext';
import { useErrorsContext } from '../../../context/ErrorsContext';
import * as recipeService from '../../../servces/recipeService';

import AsideMenu from '../../../components/Aside-menu/AsideMenu';
import Main from '../../../components/Common/Main/Main';
import Header from '../../../components/Headers/Header/Header';
import Nav from '../../../components/Nav/Nav';
import ImageHeader from '../../../components/Profile/ImageHeader/ImageHeader';
import RecipeList from '../../../components/Recipe/Recipe-list/RecipeList';
import NoData from '../../../components/Common/No-data/NoData';
import SkeletonRecipe from '../../../components/Common/skeletons/SkeletonRecipe/SkeletonRecipe';
import styles from './MyRecipe.module.css';
import Meta from '../../../components/Common/Meta/Meta';

function MyRecipe() {

    const { user, logout } = useAuthContext();
    const {addErrors} = useErrorsContext();
    const navigate = useNavigate();

    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        recipeService.getAllOwner(user.accessToken)
            .then(result => {
                setRecipes(result);
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
            .finally(()=> {
                setLoading(false);
            });
    }, [user.accessToken]);

    const deleteHandler = (id) => {
        recipeService.removeRecipe(id, user.accessToken)
            .then(() => {
                setRecipes(state => [...state.filter(x => x._id !== id)]);
            })
            .catch((err) => {
                if (err.status == 401) {
                    logout();
                    navigate('/');
                } else {
                    addErrors(err.jsonRes)
                    navigate('/404')
                };
            })
    };

    const skeletonArr = [1, 2, 3, 4, 5, 6]

    return (
        <>
        <Meta
        title={`Cook Book | ${user && user.firstName} ${
          user && user.lastName
        }`}
      />
            <Header>
                <Nav />
            </Header>


            <Main>
                <ImageHeader />

                <section className={styles.profile__grids}>
                    <AsideMenu />

                    <section className={styles.profile__content}>
                        <p className={styles.profile__content__text}>recipes</p>
                        {loading
                            ? <div className={styles.wrapper}>
                                {skeletonArr.map((i) => (
                                    <SkeletonRecipe key={i} />
                                ))}
                            </div>
                            : <>
                                {recipes.length > 0
                                    ? <div className={styles.profile__content__container}>
                                        <RecipeList recipes={recipes} deleteHandler={deleteHandler} />
                                    </div>
                                    : <NoData active={'noRecipe'} />
                                }
                            </>
                        }

                    </section>

                </section>

            </Main>
        </>
    )
};

export default MyRecipe;