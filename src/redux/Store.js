import { createStore } from 'redux'
import favorites from './reducers/Favorites'


const store = createStore(favorites);



export default store