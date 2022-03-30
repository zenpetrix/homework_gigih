import logo from './logo.svg';
import './App.css';
import Track from './component/Track';
import Login from './component/Login';
import Auth from './component/Auth';

const giphy_secret_key = process.env.REACT_APP_GIPHY_KEY

function App() {
  return (
    <Auth />
  );
}
export default App;