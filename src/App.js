import './App.css';
// import Browser router as router for shorthand and add route switch and redirect
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
// import pages components so the app.js knows what to render for which routes
import SearchPage from './pages/SearchPage';
import FavoritesPage from './pages/FavoritesPage';
import SearchFavoritesPage from './pages/SearchFavoritesPage'

function App() {
  return (
    // wrap all components in router to allow the rendering of pages without having 
    // to reload page.
    <Router>
    <div className="App">
      {/* use a switch to let the router know which component to render */}
    <Switch>
      {/* use a route tag to designate the specific path in the url for 
      the wrapped component */}
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
