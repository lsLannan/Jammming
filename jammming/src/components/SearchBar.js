import '../styles/SearchBar.css';

function SearchBar(props) {
    return (
        <div className="searchbar-container">
            <input className="search-bar" placeholder="Enter a Song, Album or Artist" />
            <button className="search-btn" type="submit">Search</button>
        </div>
    );
};

export default SearchBar;
