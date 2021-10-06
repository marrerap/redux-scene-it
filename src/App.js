import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import SearchPage from './pages/SearchPage';
import FavoritesPage from './pages/FavoritesPage';
import SearchFavoritesPage from './pages/SearchFavoritesPage'

function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
      <Route exact path="/" >
        <SearchPage />
      </Route>
      <Route exact path='/favorites'>
        <FavoritesPage />
      </Route>
      <Route exact path='/favoritesSearch'>
        <SearchFavoritesPage />
      </Route>
      <Redirect to='/'/>      
    </Switch>
    </div>
    </Router>
  );
}

export default App;
