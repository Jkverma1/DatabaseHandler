import React from "react";
import "./ResultArea.css";

const ResultArea = ({ result }) => {
  const handleSuggestions = () => {

    document.getElementById("searchInput").value = result.name;
  };
  return (
    <div className="search-result" onClick={handleSuggestions}>
      {result.name}
    </div>
  );
};

export default ResultArea;
