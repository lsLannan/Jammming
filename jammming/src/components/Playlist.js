import Track from './Track';
import '../styles/Playlist.css'

function Playlist() {
    return (
        <div className="playlist-container">
            <input className="playlist-input" placeholder="Enter Playlist Name..." />

            <Track />

            <button className="save-btn">Save to Spotify</button>
        </div>
    );
};

export default Playlist;