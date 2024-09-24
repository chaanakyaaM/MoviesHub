import React from 'react';
import DeleteImg from '../delete-icon.png';

function WatchList({ datalist, watchlistsetter, idsetter }) {

  const uniqueDatalist = Array.from(
    new Set(datalist.map(item => JSON.stringify(item)))
  ).map(item => JSON.parse(item));


  const delHandler = (title, year) => {
    const updatedList = uniqueDatalist.filter(item => item.title !== title || item.year !== year);
    watchlistsetter(updatedList);
  };


  const clickHandler = (id) => {
    idsetter(id);
  };

  return (
    <div className='watchlist-container'>
      <h2>Watch List</h2>
      {uniqueDatalist.length > 0 ? (
        uniqueDatalist.map((item, index) => (
          <div key={index} className='watchlist-elements' onClick={() => clickHandler(item.imdbid)}>
            <img src={item.poster} alt={`${item.title} Poster`} />
            <div className="watchlist-details">
              <p>Title: <strong>{item.title}</strong></p>
              <p>Year: <strong>{item.year}</strong></p>
              <button className='del' onClick={() => delHandler(item.title, item.year)}>
                <img src={DeleteImg} alt="Delete" />
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Add movies to your watchlist.</p>
      )}
    </div>
  );
}

export default WatchList;
