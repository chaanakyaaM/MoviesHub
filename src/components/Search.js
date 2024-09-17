import React from "react";
import { useState } from "react";

function Search({idhandler}) {
  const [searchVal, setsearchVal] = useState("");
  const [searchResult, setSearchResult] = useState([])
  const [loading, setloading] = useState(true);
  const controller = new AbortController();
  const [loadingindicator,setloadingindicator] = useState('Loading...')
  function Clickhandler() {
    console.log(searchVal)
    async function fetchData() {
      setloading(false);
      try {
        setloadingindicator("Loading...");
        let response = await fetch(
          `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${searchVal}`,
          {signal: controller.signal}
        );

        let data = await response.json();
        setSearchResult(data.Search || []);
        for (let i = 0; i < data.Search.length; i++) {
        console.log(data.Search[i]);
        }
        setloading(true);
      } catch (error) {
        console.error("Error fetching data:", error);
        alert("Movie not found, please check you spelling.");
        setloadingindicator("Try seaching any other movie...");

      }
      
      console.log()
      return ()=>{
        controller.abort(); 
        
      }
    }
    fetchData()
  
  }
  function keyhandler(e){
    if (e==='Enter'){
      Clickhandler()
    }
  }
  return (
    <div className="search">
      <div className="search-field">
        <input
          type="text"
          placeholder="Search..."
          value={searchVal}
          onChange={(e) => setsearchVal(e.target.value)}
          onKeyUpCapture={(e)=>keyhandler(e.key)}
        />
        <button onClick={Clickhandler}>Search</button>
      </div>
      <div className="result-field">
        {loading ? (
          searchResult.map((item,index) => (
            <div className="data-element" onClick={()=>idhandler(item.imdbID)} key={index}>
                <div className="top-field">
                    <div className="title-details">
                    <p key={item.Title}>{item.Title}</p>
                    <p>Year: {item.Year} </p>
                    <p>Type: {item.Type}</p>
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
          <p>{loadingindicator}</p>
        )}
      </div>
    </div>
  );
}


export default Search;
