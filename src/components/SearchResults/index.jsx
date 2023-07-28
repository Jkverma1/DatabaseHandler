import React from "react";
import "./SearchResults.css";
import ResultArea from "../ResultArea";

const SearchResults = ({ results, setSelectedName }) => {
  return (
    <div className="results-list position-relative">
      {results.map((result, id) => {
        return <ResultArea result={result} setSelectedName={setSelectedName} key={id} />;
      })}
    </div>
  );
};

export default SearchResults;
