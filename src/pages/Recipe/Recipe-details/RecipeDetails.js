import React from 'react';
import CreateComment from '../../../components/Comments/Create-comment/CreateComment';
import RecipeCommentCard from '../../../components/Comments/Recipe-comments/RecipeCommentCard';
import Main from '../../../components/Common/Main/Main';
import Header from '../../../components/Headers/Header/Header';
import Nav from '../../../components/Nav/Nav';
import Details from '../../../components/Recipe/Details/Details';

function RecipeDetails() {
    return (
        <>
            <Header>
                <Nav />
            </Header>
            <Main>
                <Details />
                <CreateComment />
                <RecipeCommentCard />
                <RecipeCommentCard />
                <RecipeCommentCard />
                <RecipeCommentCard />
            </Main>
        </>
    )
};

export default RecipeDetails;