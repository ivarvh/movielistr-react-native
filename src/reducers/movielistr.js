import thunk from 'redux-thunk';
import movies, {fetchMovies} from './movies';
import {combineReducers, applyMiddleware, createStore} from 'redux';

export const movieListrApp = combineReducers({
	movies
});

const MovieStore = createStore(movieListrApp, applyMiddleware(thunk))

MovieStore.dispatch(fetchMovies()); // Load initial state

export default MovieStore;