import { createStore, combineReducers } from "redux";
import favorites from "./reducers/Favorites";
import search from "./reducers/SearchFavorites";

const rootReducer = combineReducers({
  movies: favorites,
  search: search,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
