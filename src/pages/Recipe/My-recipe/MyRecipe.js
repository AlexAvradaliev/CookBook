import React from 'react';
import AsideMenu from '../../../components/Aside-menu/AsideMenu';
import Main from '../../../components/Common/Main/Main';
import Header from '../../../components/Headers/Header/Header';
import Nav from '../../../components/Nav/Nav';
import ImageHeader from '../../../components/Profile/ImageHeader/ImageHeader';
import RecipeList from '../../../components/Recipe/Recipe-list/RecipeList';
import styles from './MyRecipe.module.css'

function MyRecipe() {
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
                            <RecipeList />
                        </div>
                    </section>

                </section>

            </Main>
        </>
    )
};

export default MyRecipe;