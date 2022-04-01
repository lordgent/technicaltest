import {combineReducers} from 'redux'
import moviesReducer from './reducers/movie'
import genreReducer from './reducers/genre'
export default combineReducers({
  moviesReducer,
  genreReducer,
})
