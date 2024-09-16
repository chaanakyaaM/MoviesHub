import React from "react";
import { useState } from "react";

function Search({idhandler}) {
  const [searchVal, setsearchVal] = useState("");
  const [searchResult, setSearchResult] = useState([])
  const [loading, setloading] = useState(true);
  function clickhandler() {
    console.log(searchVal)
    async function fetchData() {
      setloading(false);
      try {
        let response = await fetch(
          `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${searchVal}`
        );

        let data = await response.json();
        setSearchResult(data.Search || []);
        for (let i = 0; i < data.Search.length; i++) {
          console.log(data.Search[i]);
        }
        setloading(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }
  return (
    <div className="search">
      <div className="search-field">
        <input
          type="text"
          placeholder="Search..."
          value={searchVal}
          onChange={(e) => setsearchVal(e.target.value)}
        />
        <button onClick={clickhandler}>Search</button>
      </div>
      <div className="result-field">
        {loading ? (
          searchResult.map((item,index) => (
            <div className="data-element" onClick={()=>idhandler(item.imdbID)} key={index}>
                <div className="top-field">
                    <div className="title-details">
                    <p key={item.Title}>{item.Title}</p>
                    <p>Year: {item.Year} </p>
                    <p>Rated: {item.Rated}</p>
                    </div>
                    {
                        item.Poster !== "N/A" ? (
                            <img src={item.Poster} alt={item.Title} />
                            ) : ( <img src="" alt="Poster Not available" /> )
                    }
                </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Search;
