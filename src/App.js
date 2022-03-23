import logo from './logo.svg';
import './App.css';
import data from './data_album/single-sample.js';

const giphy_secret_key = process.env.REACT_APP_GIPHY_KEY

function App() {
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

export default App;