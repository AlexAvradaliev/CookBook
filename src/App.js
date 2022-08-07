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

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile/' element={<MyRecipe />} />
        <Route path='/profile/comments' element={<Comment />} />
        <Route path='/profile/edit' element={<EditProfile />} />
        <Route path='/profile/create-recipe' element={<Create />} />
        <Route path='/recipe/:recipeId' element={<RecipeDetails />} />
        <Route path='/recipe/:recipeId/edit' element={<EditRecipe />} />
        <Route path='/search' element={<Search />} />
      </Routes>
      <Footer />
    </AuthProvider>

  );
}

export default App;
