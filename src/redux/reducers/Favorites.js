function favorites(state = [], action) {
  switch (action.type) {
    case "SAVE_MOVIE":
      return [...state, action.movie];

    case "REMOVE_MOVIE":
      return [...state.filter((movie) => movie.imdbID !== action.movie.imdbID)]

    default:
      return state;
  }
}
export default favorites;
