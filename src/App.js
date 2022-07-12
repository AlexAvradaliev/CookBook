import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home'
import './App.css';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;
