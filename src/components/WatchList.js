import React from 'react';
import DeleteImg from '../delete-icon.png';

function WatchList({datalist}) {
  return (
    <div className='watchlist-container'>
        <h2>Watch List</h2>
    {datalist.map((item, index) => (
        <div key={index} className='watchlist-elements' style={{display:'flex'}}>
            <img src={item.poster} alt="" />
            <div className="watchlist-details">
            <p>Title : {item.title}</p>
            <p>Year : {item.year}</p>
            <button className='del'><img src={DeleteImg} alt="" /></button>
            </div>
        </div>
    ))}
    </div>
  )
}

export default WatchList