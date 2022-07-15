import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home'
import './App.css';
import Footer from './components/Footer/Footer';
import Login from './pages/Auth/Login/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;
