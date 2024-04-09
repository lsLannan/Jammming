import './App.css';
import SearchBar from './components/SearchBar'; 
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import Tracklist from './components/Tracklist';
 
function App() {

  function woah() {
    alert("a!");
  }

  const accessToken = () => {
    alert("Log in button clicked!");
  }

  return (
    <div className="App">
      <header className="App-header container">
        <h1>Jam<span className="bold">mm</span>ing</h1>
        <button className="login-btn" onClick={accessToken}>Log In</button>
      </header>
      <div>
        <SearchBar />
      </div>
      <div className="container">
        <SearchResults />
        <Playlist />
      </div>
    </div>
  );
}

export default App;
