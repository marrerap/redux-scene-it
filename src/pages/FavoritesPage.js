import React from "react";
import Header from "../components/Header";
import { Button, Card, Container } from "react-bootstrap";
import { useSelector } from 'react-redux'
import { actionRemoveMovie } from "../redux/actions/Favorites";
import { useDispatch } from "react-redux";


function FavoritesPage() {
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  
  const handleRemove = (movie) => {
    dispatch(actionRemoveMovie(movie));
  };

  return (
    <div>
      <Header />
      <h1>Your Favorite Movies</h1>
      <Container>
        <div
          className="row justify-content-between "
          style={{ display: "flex" }}
        >
          {movies.map((movie, index) => {
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
