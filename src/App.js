import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home'
import './App.css';
import Footer from './components/Footer/Footer';
import Login from './pages/Auth/Login/Login';
import Register from './pages/Auth/Register/Register';
import Comment from './pages/Profile/Comment/Comment';
import EditProfile from './pages/Profile/Edit/Edit';
import Create from './pages/Recipe/Create/Create';
import MyRecipe from './pages/Recipe/My-recipe/MyRecipe';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile/:userId/' element={<MyRecipe />} />
        <Route path='/profile/:userId/comments' element={<Comment />} />
        <Route path='/profile/:userId/edit' element={<EditProfile />} />
        <Route path='/profile/:userId/create-recipe' element={<Create />} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;
