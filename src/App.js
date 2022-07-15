import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home'
import './App.css';
import Footer from './components/Footer/Footer';
import Login from './pages/Auth/Login/Login';
import Register from './pages/Auth/Register/Register';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;
