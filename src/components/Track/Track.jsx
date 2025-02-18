import { useCallback } from "react";
import "./Track";

export default function Track(props) {
  const addTrack = useCallback(
    (event) => {
      props.onAdd(props.track);
    },
    [props.onAdd, props.track]
  );

  const removeTrack = useCallback(
    (event) => {
      props.onRemove(props.track);
    },
    [props.onRemove, props.track]
  );

  const renderAction = () => {
    if (props.isRemoval) {
      return (
        <button class="Track-button" onclick={removeTrack}>
          -
        </button>
      );
    }
    return (
      <button class="Track-button" onClick={addTrack}>
        +
      </button>
    );
  };

  return (
    <div class="Track">
      <div class="Track-information">
        <h3>{props.track.name}</h3>
        <p>
          {props.track.artist} | {props.track.album}
        </p>
      </div>
      {renderAction}
    </div>
  );
}
