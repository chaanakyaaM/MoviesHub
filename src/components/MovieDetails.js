import React, { useEffect, useState } from "react";
// import UsersIcon from "../users-icon.png";

export default function MovieDetails({
  Id,
  plotsetter,
  watchlistsetter,
  watchlist,
}) {
  const [loading, setLoading] = useState(true);
  const [loadText, setLoadText] = useState("Search any Movie...");
  const [movieData, setMovieData] = useState(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setLoadText("Loading...");

      try {
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${Id}&plot=full`
        );
        const data = await response.json();

        if (data.Response === "True") {
          setMovieData(data);
          setIsActive(watchlist.some((item) => item.imdbid === Id));
        } else {
          setLoadText("Movie not found.");
        }
      } catch (error) {
        console.error("Error fetching movie data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [Id, watchlist]);

  const addMovieToWatchlist = () => {
    const newMovie = {
      title: movieData.Title,
      poster: movieData.Poster,
      imdbid: Id,
      year: movieData.Year,
    };

    watchlistsetter((prevList) => {
      const updatedList = [...prevList, newMovie];
      return Array.from(new Set(updatedList.map((item) => JSON.stringify(item)))).map(
        (item) => JSON.parse(item)
      );
    });
    setIsActive(true);
  };

  const removeMovieFromWatchlist = () => {
    watchlistsetter((prevList) => prevList.filter((item) => item.imdbid !== Id));
    setIsActive(false);
  };

  return (
    <>
      {loading ? (
        <div>{loadText}</div>
      ) : (
        movieData && (
          <div className="details" style={{ display: "flex" }}>
            <img className="img-poster" src={movieData.Poster} alt={movieData.Title} />
            <div className="movie-details">
              <h1 className="title">Title: <span>{movieData.Title}</span></h1>
              <p>Released: <span>{movieData.Released !== "N/A" ? movieData.Released : "unknown"}</span></p>
              <p>Genre: <span>{movieData.Genre !== "N/A" ? movieData.Genre : "unknown"}</span></p>
              {plotsetter(movieData.Plot)}
              <p className="user">
                IMDB Rating: ⭐ <span>{movieData.imdbRating} (
                <img className="usericon" src='./assets/users-icon.png' alt="Users Icon" /> {movieData.imdbVotes})</span>
              </p>
              <p>Type: <span>{movieData.Type !== "N/A" ? movieData.Type : "unknown"}</span></p>
              <p>Collections: <span>{movieData.BoxOffice !== "N/A" ? movieData.BoxOffice : "unknown"}</span></p>
              <p>Awards: <span>{movieData.Awards !== "N/A" ? movieData.Awards : "unknown"}</span></p>
              <p>Director: <span>{movieData.Director !== "N/A" ? movieData.Director : "unknown"}</span></p>
              <p>Cast: <span>{movieData.Actors !== "N/A" ? movieData.Actors : "unknown"}</span></p>
              <p>Runtime: <span>{movieData.Runtime !== "N/A" ? movieData.Runtime : "unknown"}</span></p>
              <p>
                Add to Watch List: &nbsp;
                {isActive ? (
                  <button onClick={removeMovieFromWatchlist} className="unadd">UnAdd</button>
                ) : (
                  <button onClick={addMovieToWatchlist} className="add">Add</button>
                )}
              </p>
            </div>
          </div>
        )
      )}
    </>
  );
}
