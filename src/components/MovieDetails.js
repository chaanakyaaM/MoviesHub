import React, { useEffect } from 'react';
import { useState } from 'react';
import UsersIcon from '../users-icon.png'

export default function MovieDetails({Id, plotsetter , watchlistsetter, watchlist}) {
    const [loading,setloading] = useState(false)
    const [loadtext, setloadtext] = useState('Search any Movie...')
    const [id, setid] = useState('')
    function clickhandler() {
        async function fetchData() {
          setloading(false);
          try {
            let response = await fetch(
              `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${Id}&plot=full `
            );
            let data = await response.json();
            
            setid(data)
            setloading(true);
            setloadtext('Loading...')
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        }
    
        fetchData();
      }
      useEffect(clickhandler,[Id])
      function addclickhandler(){
        watchlistsetter([...watchlist, {title:id.Title, poster:id.Poster, imbdid: Id, year:id.Year}])
      }
  return (
    <>
      {
        loading ? (
          id && (
            <div className="details" style={{ display: 'flex' }}>
              <img className='img-poster' src={id.Poster} alt="" />
              <div className="movie-details">
                <h1 className="title">Title : <span>{id.Title}</span></h1>
                <p>Released : {id.Released==='N/A' ? <span>unknown</span> : <span>{id.Released}</span>}</p>
                <p>Genre : {id.Genre==='N/A' ? <span>unknown</span> : <span>{id.Genre}</span>}</p>
                {plotsetter(id.Plot)}
                <p className='user'>IMDB Rating : ⭐ <span > {id.imdbRating} (<img className="usericon" src={UsersIcon} alt="" />  {id.imdbVotes} )  </span></p>
                <p>Type : {id.Type==='N/A' ? <span>unknown</span> : <span>{id.Type}</span>}</p>
                <p>Collections : {id.BoxOffice==='N/A' ? <span>unknown</span> : <span>{id.BoxOffice}</span>}</p>
                <p>Awards : {id.Awards==='N/A' ? <span>unknown</span> : <span>{id.Awards}</span>}</p>
                <p>Director : {id.Director==='N/A' ? <span>unknown</span> : <span>{id.Director}</span>}</p>
                <p>Cast : {id.Actors==='N/A' ? <span>unknown</span> : <span>{id.Actors}</span>}</p>
                <p>Runtime : {id.Runtime==='N/A' ? <span>unknown</span> : <span>{id.Runtime}</span>}</p>
                <p>Add to Watch List : <button onClick={addclickhandler} className='add'>Add</button></p>
              </div>
            </div>
          )
          
        ) : (
          <div>{loadtext}</div>
        )
      }
    </>

  );
}
