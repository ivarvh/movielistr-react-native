import thunk from 'redux-thunk';
import movies, {fetchMovies} from './movies';
import {combineReducers, applyMiddleware, createStore} from 'redux';
import { reducer as formReducer } from 'redux-form'

export const movieListrApp = combineReducers({
	movies,
	form: formReducer
});

const MovieStore = createStore(movieListrApp, applyMiddleware(thunk))

MovieStore.dispatch(fetchMovies()); // Load initial state

export default MovieStore;