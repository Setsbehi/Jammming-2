import "./SearchResults.css";
import TrackList from "../TrackList/TrackList";

export default function SearchResult({searchResults}) {
  return (
    <div className="SearchResults">
      <h2>Search Result</h2>
      <TrackList tracks={searchResults} />
    </div>
  );
}
