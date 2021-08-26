import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import { actionSaveMovie } from "../redux/actions/Favorites";
import { useDispatch } from "react-redux";

function SearchResults(props) {
  const movies = props.data;
  const dispatch = useDispatch();

  const handleSave = (movie) => {
    dispatch(actionSaveMovie(movie));
  };

  return (
    <Container>
      <div className="row justify-content-around " style={{ display: "flex" }}>
        {movies.map((movie, index) => {
          return (
            
              <Card className="col-sm-3" key={movie.imdbID} style={{ margin: '10px 0', width: "18rem" }}>
                <Card.Img variant="top" src={movie.Poster} />
                <Card.Body>
                  <Card.Title>{movie.Title}</Card.Title>
                  <Card.Text>
                    Release Year: {movie.Year}
                    <br />
                  </Card.Text>
                  <Button
                    onClick={() => {handleSave(movie)}}
                    type="submit"
                    variant="primary"
                  >
                    Save
                  </Button>
                </Card.Body>
              </Card>
            
          );
        })}
      </div>
    </Container>
  );
}

export default SearchResults;
