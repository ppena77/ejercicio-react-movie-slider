import './App.css';
//import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import MovieCardsContainer from './components/MovieCardsContainer';

function App() {
  {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter> */}

  return (
      <div>
        <Home />
      </div>            
  );
}

export default App;