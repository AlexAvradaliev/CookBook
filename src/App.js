import { Route, Routes } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext';

import Home from './pages/Home/Home'
import './App.css';
import Footer from './components/Footer/Footer';
import Login from './pages/Auth/Login/Login';
import Register from './pages/Auth/Register/Register';
import Comment from './pages/Profile/Comment/Comment';
import EditProfile from './pages/Profile/Edit/Edit';
import Create from './pages/Recipe/Create/Create';
import MyRecipe from './pages/Recipe/My-recipe/MyRecipe';
import RecipeDetails from './pages/Recipe/Recipe-details/RecipeDetails';
import EditRecipe from './pages/Edit-recipe/EditRecipe';
import Search from './pages/Search/Search';
import PrivateGuard from './components/Common/Guards/PrivateGuard';
import GuestGuard from './components/Common/Guards/GuestGuard';
import { ErrorsProvider } from './context/ErrorsContext';
import NotFound from './pages/Not-found/NotFound';
import { RecipeProvider } from './components/Recipe/Create/context/recipeFormContext';
import OwnerGuard from './components/Common/Guards/OwnerGuard';
import FetchOwner from './components/Common/Guards/FetchOwner';

function App() {
  return (
    <ErrorsProvider>
      <AuthProvider>
        <RecipeProvider>

          <Routes>

            <Route element={<PrivateGuard />}>
              <Route path='/profile/' element={<MyRecipe />} />
              <Route path='/profile/comments' element={<Comment />} />
              <Route path='/profile/edit' element={<EditProfile />} />
              <Route path='/profile/create-recipe' element={<Create />} />

              <Route element={<FetchOwner />}>
                <Route element={<OwnerGuard />}>
                  <Route path='/recipe/:recipeId/edit' element={<EditRecipe />} />
                </Route>
              </Route>

            </Route>

            <Route element={<GuestGuard />}>
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
            </Route>

            <Route path='/' element={<Home />} />
            <Route path='/recipe/:recipeId' element={<RecipeDetails />} />
            <Route path='/search' element={<Search />} />
            <Route path='*' element={<NotFound />} />

          </Routes>

          <Footer />

        </RecipeProvider>
      </AuthProvider>
    </ErrorsProvider>

  );
}

export default App;
