import "./SearchResults.css";
import TrackList from "../TrackList/TrackList";

export default function SearchResult(props) {
  return (
    <div className="SearchResults">
      <h2>Search Result</h2>
      <TrackList tracks={props.searchResults} onAdd={props.onAdd} />
    </div>
  );
}
