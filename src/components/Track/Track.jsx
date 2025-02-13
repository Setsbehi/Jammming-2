import "./Track";

export default function Track(props) {
  return (
    <div class="Track">
      <div class="Track-information">
        <h3>{props.track.name}</h3>
        <p>
          {props.track.artist} | {props.track.album}
        </p>
      </div>
      <button class="Track-button">+ or -</button>
    </div>
  );
}
