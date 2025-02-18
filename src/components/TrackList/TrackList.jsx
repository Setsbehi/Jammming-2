import "./TrackList.css";
import Track from "../Track/Track";

export default function TrackList(props) {
  return (
    <div className="TrackList">
      {props.tracks.lenght &&
        props.tracks?.map((track) => {
          return (
            <Track
              track={track}
              key={track.id}
              onAdd={props.onAdd}
              isRemoval={props.isRemoval}
              onRemove={props.onRemove}
            />
          );
        })}
    </div>
  );
}
