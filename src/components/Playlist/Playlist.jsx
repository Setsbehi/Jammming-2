import "./Playlist.css";

export default function Playlist() {
  return (
    <div className="Playlist">
      <input value="New Playlist" />
      {/* add a TrackList component */}
      <button>SAVE TO SPOTIFY</button>
    </div>
  );
}
