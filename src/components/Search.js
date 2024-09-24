import React, { useState } from "react";

function Search({ idhandler }) {
  const [searchVal, setSearchVal] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingIndicator, setLoadingIndicator] = useState("Loading...");
  const controller = new AbortController();

  const fetchMovies = async () => {
    setLoading(false);
    setLoadingIndicator("Loading...");

    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${searchVal}`,
        { signal: controller.signal }
      );

      const data = await response.json();

      if (data.Error === "Movie not found!") {
        throw new Error("Movie not found");
      }

      setSearchResults(data.Search || []);
      setLoading(true);
    } catch (error) {
      alert("Movie not found, please check your spelling.");
      setLoadingIndicator("Try searching for another movie...");
    }
  };

  const handleClick = () => {
    fetchMovies();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      fetchMovies();
    }
  };

  return (
    <div className="search">
      <div className="search-field">
        <input
          type="text"
          placeholder="Search any movie..."
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
          onKeyUp={handleKeyPress}
        />
        <button onClick={handleClick}>Search</button>
      </div>
      <div className="result-field">
        {loading ? (
          searchResults.map((item, index) => (
            <div
              className="data-element"
              onClick={() => idhandler(item.imdbID)}
              key={index}
            >
              <div className="top-field">
                <div className="title-details">
                  <p>{item.Title}</p>
                  <p>Year: {item.Year}</p>
                  <p>Type: {item.Type}</p>
                </div>
                <img
                  src={item.Poster !== "N/A" ? item.Poster : ""}
                  alt={item.Poster !== "N/A" ? item.Title : "Poster Not available"}
                />
              </div>
            </div>
          ))
        ) : (
          <p>{loadingIndicator}</p>
        )}
      </div>
    </div>
  );
}

export default Search;
