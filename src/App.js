import "./App.css";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import { useState, useEffect } from "react";
import MovieDetails from "./components/MovieDetails";
import Search from "./components/Search";
import WatchList from "./components/WatchList";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import About from "./components/About";
import Help from "./components/Help";

function App() {
  const [id, setId] = useState();
  const [plot, setPlot] = useState("");
  const [watchlist, setWatchlist] = useState(() => {
    const storedWatchlist = localStorage.getItem("watchlist");
    return storedWatchlist ? JSON.parse(storedWatchlist) : [];
  });

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <main className="main">
          <Routes>
            <Route
              path="/"
              element={
                <Container>
                  <h1>MovieHub</h1>
                  <div className="one">
                    <Search idhandler={setId} />
                  </div>
                  <div className="two">
                    <MovieDetails
                      Id={id}
                      plotsetter={setPlot}
                      watchlistsetter={setWatchlist}
                      watchlist={watchlist}
                    />
                  </div>
                  <div className="center">MoviesHub</div>
                  <div className="three">
                    <span>Plot: </span>
                    <i>{plot || "Plot goes here..."}</i>
                  </div>
                  <div className="four">
                    <WatchList
                      datalist={watchlist}
                      watchlistsetter={setWatchlist}
                      idsetter={setId}
                    />
                  </div>
                </Container>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
