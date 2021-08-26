import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import SearchResults from "../components/SearchResults";

function SearchPage() {
  const [movies, setMovies] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const uriInput = encodeURI(searchInput);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://www.omdbapi.com/?apikey=59354c85&s=${uriInput}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.Search);
      });
  };

  

  return (
    <div>
      <Header/>
      <h1>Scene It</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Search: &nbsp;
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </label>
        <button type="submit">Search</button>
      </form>
      <br />
     
      <SearchResults data={movies} />
    </div>
  );
}

export default SearchPage;
