import './App.css';
import Navbar from './components/Navbar';
import Container from './components/Container';
import { useState } from 'react';
import MovieDetails from './components/MovieDetails';
import Search from './components/Search';
import WatchList from './components/WatchList';
import { Route,BrowserRouter ,Routes} from 'react-router-dom';

function App() {
  const [id, setid] = useState()
  const [plot, setPlot] = useState('')
  const [watchlist, setwatchlist] = useState([])

  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <Container>
            MovieHub
            <div className="one"><Search idhandler={setid}/></div>
            <div className="two"><MovieDetails Id={id} plotsetter={setPlot} watchlistsetter={setwatchlist} watchlist={watchlist}></MovieDetails></div>
            <div className="center">MoviesHub</div>
            <div className="three"><span>Plot</span> : <i>{plot ? plot : 'Plot goes here...'}</i></div>
            <div className="four"><WatchList datalist={watchlist} watchlistsetter={setwatchlist}/></div>
            </Container>}>
          </Route>
          <Route path="/about" element={'/'}>
          </Route>
        </Routes>
      </BrowserRouter>
          </div>
        </div>
  );
}

export default App;
