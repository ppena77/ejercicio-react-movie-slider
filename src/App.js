import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Peliculas from './components/Peliculas';

function App() {

  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
            <Route index path="/home" element={<Home />} />
            <Route path="/peliculas" element={<Peliculas />} />
          </Routes>
        </BrowserRouter>
      </div>            
  );
}

export default App;