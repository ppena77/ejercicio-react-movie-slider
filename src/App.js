import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Pelicula from './components/Pelicula';

function App() {

  return (      
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route index path="/home" element={<Home />} />
        <Route path="/pelicula" element={<Pelicula />} />
      </Routes>
    </BrowserRouter>                
  );
}

export default App;