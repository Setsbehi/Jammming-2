import "./TrackList.css";
import Track from "../Track/Track";

export default function TrackList({searchResults}) {
  return (
    <div className="TrackList">
      {searchResults.tracks.map((track) => {
        return <Track track={track} key={track.id} />;
      })}
    </div>
  );
}
