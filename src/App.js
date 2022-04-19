import react from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/home/home.js';
import Header from './component/header/header';
import Footer from './component/footer/footer.js';
import PageNotFound from './component/pageNotFound/pageNotFound';
import MovieDetail from './component/movieDetails/movieDetails';

import './App.scss';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movie/:imdbID' element={<MovieDetail />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />

      </Router>

    </div>
  );
}

export default App;
