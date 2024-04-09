import Track from './Track';
import '../styles/SearchResults.css';


function SearchResults(props) {
    return (
        <div className="search-result-container">
            <h2>Search Results</h2>

            <div className="results-container">
                <Track />
                <Track />
                <Track />
                <Track />
                <Track />
            </div>
        </div>
    );
};

export default SearchResults;