import React from 'react'
import data from '../data_album/single-sample';

function Track() {
  return (
    <div className="App">
    <div class="playlist">
  <img src = {data.album.images[1].url}></img>
  <h1>{data.name}</h1>
  <h3>{data.artists[0].name} - {data.album.name}</h3>
  <button>PLAY</button>
  </div>
  </div>  
  );
}

export default Track