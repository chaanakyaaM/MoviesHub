import React, { useEffect, useState } from "react";
import UsersIcon from "../users-icon.png";

export default function MovieDetails({
  Id,
  plotsetter,
  watchlistsetter,
  watchlist,
}) {
  const [loading, setLoading] = useState(false);
  const [loadText, setLoadText] = useState("Search any Movie...");
  const [movieData, setMovieData] = useState(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setLoadText("Loading...");

      try {
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${Id}&plot=full`
        );
        const data = await response.json();

        if (data.Response === "True") {
          setMovieData(data);
          setActive(watchlist.some((item) => item.imdbid === Id));
        } else {
          setLoadText("Movie not found.");
        }
      } catch (error) {
        // alert("Something went wrong!!!");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [Id]);

  function addClickHandler() {
    const newMovie = [
      ...watchlist,
      {
        title: movieData.Title,
        poster: movieData.Poster,
        imdbid: Id,
        year: movieData.Year,
      },
    ];
    watchlistsetter(
      Array.from(new Set(newMovie.map((item) => JSON.stringify(item)))).map(
        (item) => JSON.parse(item)
      )
    );
    setActive(true);
  }

  function unaddClickHandler() {
    const updatedList = watchlist.filter((item) => item.imdbid !== Id);
    watchlistsetter(updatedList);
    setActive(false);
  }

  return (
    <>
      {loading ? (
        <div>{loadText}</div>
      ) : (
        movieData && (
          <div className="details" style={{ display: "flex" }}>
            <img className="img-poster" src={movieData.Poster} alt="" />
            <div className="movie-details">
              <h1 className="title">
                Title: <span>{movieData.Title}</span>
              </h1>
              <p>
                Released:{" "}
                {movieData.Released === "N/A" ? (
                  <span>unknown</span>
                ) : (
                  <span>{movieData.Released}</span>
                )}
              </p>
              <p>
                Genre:{" "}
                {movieData.Genre === "N/A" ? (
                  <span>unknown</span>
                ) : (
                  <span>{movieData.Genre}</span>
                )}
              </p>
              {plotsetter(movieData.Plot)}
              <p className="user">
                IMDB Rating: ⭐{" "}
                <span>
                  {movieData.imdbRating} (
                  <img className="usericon" src={UsersIcon} alt="" />{" "}
                  {movieData.imdbVotes})
                </span>
              </p>
              <p>
                Type:{" "}
                {movieData.Type === "N/A" ? (
                  <span>unknown</span>
                ) : (
                  <span>{movieData.Type}</span>
                )}
              </p>
              <p>
                Collections:{" "}
                {movieData.BoxOffice === "N/A" ? (
                  <span>unknown</span>
                ) : (
                  <span>{movieData.BoxOffice}</span>
                )}
              </p>
              <p>
                Awards:{" "}
                {movieData.Awards === "N/A" ? (
                  <span>unknown</span>
                ) : (
                  <span>{movieData.Awards}</span>
                )}
              </p>
              <p>
                Director:{" "}
                {movieData.Director === "N/A" ? (
                  <span>unknown</span>
                ) : (
                  <span>{movieData.Director}</span>
                )}
              </p>
              <p>
                Cast:{" "}
                {movieData.Actors === "N/A" ? (
                  <span>unknown</span>
                ) : (
                  <span>{movieData.Actors}</span>
                )}
              </p>
              <p>
                Runtime:{" "}
                {movieData.Runtime === "N/A" ? (
                  <span>unknown</span>
                ) : (
                  <span>{movieData.Runtime}</span>
                )}
              </p>
              <p>
                Add to Watch List : &nbsp;
                {active ? (
                  <button onClick={unaddClickHandler} className="unadd">
                    {" "}
                    UnAdd
                  </button>
                ) : (
                  <button onClick={addClickHandler} className="add">
                    {" "}
                    Add
                  </button>
                )}
              </p>
            </div>
          </div>
        )
      )}
    </>
  );
}
