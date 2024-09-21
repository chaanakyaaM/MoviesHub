import "./App.css";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import { useState } from "react";
import MovieDetails from "./components/MovieDetails";
import Search from "./components/Search";
import WatchList from "./components/WatchList";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import About from "./components/About";
import Help from "./components/Help";

function App() {
  const [id, setid] = useState();
  const [plot, setPlot] = useState("");
  const [watchlist, setwatchlist] = useState([]);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <div className="main">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Container>
                  MovieHub
                  <div className="one">
                    <Search idhandler={setid} />
                  </div>
                  <div className="two">
                    <MovieDetails
                      Id={id}
                      plotsetter={setPlot}
                      watchlistsetter={setwatchlist}
                      watchlist={watchlist}
                    ></MovieDetails>
                  </div>
                  <div className="center">MoviesHub</div>
                  <div className="three">
                    <span>Plot</span> :{" "}
                    <i>{plot ? plot : "Plot goes here..."}</i>
                  </div>
                  <div className="four">
                    <WatchList
                      datalist={watchlist}
                      watchlistsetter={setwatchlist}
                      idsetter={setid}
                    />
                  </div>
                </Container>
              }
            ></Route>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/help" element={<Help />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
