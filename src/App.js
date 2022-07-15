import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home'
import './App.css';
import Footer from './components/Footer/Footer';
import Login from './pages/Auth/Login/Login';
import Register from './pages/Auth/Register/Register';
import Comment from './pages/Profile/Comment/Comment';
import EditProfile from './pages/Profile/Edit/Edit';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile/:userId/comments' element={<Comment />} />
        <Route path='/profile/:userId/edit' element={<EditProfile />} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;
