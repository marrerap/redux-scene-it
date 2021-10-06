import React from "react";
import Header from "../components/Header";
import { Button, Card, Container } from "react-bootstrap";
import { useSelector } from 'react-redux'
import { actionRemoveMovie} from "../redux/actions/Favorites";
import { useDispatch } from "react-redux";
import { actionSetSearch } from '../redux/actions/SearchFavorites'


function FavoritesPage() {
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  
  const handleRemove = (movie) => {
    dispatch(actionRemoveMovie(movie));
  };
  const search = useSelector((state) => state.search);
  
  const filteredFavorites = movies.filter((movie) => {
    return movie.Title.includes(search);
  });


  const handleClear = (e) => {
    e.preventDefault();
    dispatch(actionSetSearch(""));
  };

  return (
    <div>
      <Header />
      <h1>Your Favorite Movies</h1>
      <label for="favSeach">
        Search Favorites: &nbsp;
        <input
          require
          id="favSearch"
          value={search}
          onChange={(e) => dispatch(actionSetSearch(e.target.value))}
        />
      </label>
      <button onClick={handleClear} type="reset">
        Clear
      </button>
      <Container>
        <div
          className="row justify-content-between "
          style={{ display: "flex" }}
        >
          {filteredFavorites.map((movie, index) => {
            return (
              <div className="col-sm justify-content-center">
                <Card key={index} style={{ width: "18rem", height: '100%' }}>
                  <Card.Img variant="top" src={movie.Poster} />
                  <Card.Body>
                    <Card.Title>{movie.Title}</Card.Title>
                    <Card.Text>
                      Release Year: {movie.Year}
                      <br />
                    </Card.Text>
                    <Button
                    onClick={() => {handleRemove(movie)}}
                    type="submit"
                    variant="primary"
                  >
                    Remove
                  </Button>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default FavoritesPage;
