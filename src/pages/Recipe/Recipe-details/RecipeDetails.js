import {Link} from 'react-router-dom';

import { useAuthContext } from '../../../context/AuthContext';

import { CommentProvider } from '../../../components/Comments/context/commentContext';
import CreateComment from '../../../components/Comments/Create-comment/CreateComment';
import RecipeCommentCard from '../../../components/Comments/Recipe-comments/RecipeCommentCard';
import Feedback from '../../../components/Common/Feedback/Feedback';
import Main from '../../../components/Common/Main/Main';
import Header from '../../../components/Headers/Header/Header';
import Nav from '../../../components/Nav/Nav';
import Details from '../../../components/Recipe/Details/Details';



function RecipeDetails() {
const {user} = useAuthContext();

    const notLogged = ( 
    <p className='lead'>
    To add a comment please{" "}
    <Link
      to={'/signin'}
    >
      <strong className='primary'>Login</strong>
    </Link>{" "}
    or{" "}
    <Link
      to={'/signup'}
    >
      <strong className='primary'>Sign up</strong>
    </Link>
  </p>
  )

    return (
        <>
            <Header>
                <Nav />
            </Header>
            <Main>
                <Details />
                {user.accessToken &&
                <Feedback />
                }
                <CommentProvider>
                    {user.accessToken
                    ? <CreateComment />
                    : notLogged
                    }
                    <RecipeCommentCard />
                </CommentProvider>
                
            </Main>
        </>
    )
};

export default RecipeDetails;