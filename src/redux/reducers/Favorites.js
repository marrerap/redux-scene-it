
const defaultState = {
    movies: []
}

function favorites(state = defaultState, action) {
    switch (action.type) {
        case 'SAVE_MOVIE':
          return {
            movies: [ ...state.movies, action.movie ]
          }
          case 'REMOVE_MOVIE':
            return {
              movies: [ ...state.movies.filter((movie) => {
                return movie.imdbID !== action.movie.imdbID
              })]
            }
        default:
          return state
      }
}
export default favorites