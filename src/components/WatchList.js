import React from 'react';
import DeleteImg from '../delete-icon.png';

function WatchList({datalist,watchlistsetter,idsetter}) {
  const uniqueDatalist = Array.from(new Set(datalist.map(item => JSON.stringify(item)))).map(item => JSON.parse(item));
  function delhandler(title, year) {
    const updatedList = uniqueDatalist.filter(item => item.title !== title || item.year !== year);
    watchlistsetter(updatedList);
  }
  function clickhandler(id){
    idsetter(id)
  }
  
  return (
    <div className='watchlist-container'>
        <h2>Watch List</h2>
    {uniqueDatalist.map((item, index) => (
        <div key={index} className='watchlist-elements' onClick={(  )=>clickhandler(item.imdbid)}>
            <img src={item.poster} alt="" />
            <div className="watchlist-details">
            <p>Title : {item.title}</p>
            <p>Year : {item.year}</p>
            <button className='del' onClick={()=>delhandler(item.title,item.year)}><img src={DeleteImg} alt="" /></button>
            </div>
        </div>
    ))}
    </div>
  )
}

export default WatchList