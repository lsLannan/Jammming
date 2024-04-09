import '../styles/Track.css';

function Track() {
    const addSong = () => {
        alert("add song button clicked");
    }
    
    return (
        <div className="song-container">
            <div>
                <p className="song-title">Song Title</p>
                <div className="song-info">
                    <p><span className="song-artist">Artist </span> |  <span className="song-album">Album </span></p>
                </div>
            </div>
            <button className="add-btn" onClick={addSong}>+</button>
        </div>
    );
};

export default Track;