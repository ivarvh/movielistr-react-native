import MovieAPI from '../api/movie-api';

// Actions
export const REFRESH_MOVIES = 'movielistr/movies/REFRESH_MOVIES';
export const MOVIES_API_ERROR = 'movielistr/movies/MOVIES_API_ERROR';
export const SELECT_MOVIE = 'movielistr/movies/SELECT_MOVIE';

// Reducer
export default (state = {movies: []}, action) => {
	switch (action.type) {
		case REFRESH_MOVIES :
			return Object.assign({}, state, {movies: action.movies});
		case MOVIES_API_ERROR:
			return Object.assign({}, state, {error: action.error});
		default:
			return state;
	}
};

// Action creators

export const refreshMovies = (movies) => {
	return {
		type: REFRESH_MOVIES,
		movies
	}
};

export const handleError = (error) => {
	return {
		type: MOVIES_API_ERROR,
		error
	}
};

// Thunks

export const fetchMovies = () => {
	return dispatch => {
		return MovieAPI
			.getMovies()
			.then(
				(response) => {
					return response.json();
				},
				error => dispatch(handleError(error))
			)
			.then(
				(movies) => {
					return dispatch(refreshMovies(movies))
				},
				error => dispatch(handleError(error))
			);
	}
};

export const updateMovie = (movie) => {
	return dispatch => {
		return MovieAPI
			.updateMovie(movie)
			.then(
				(response) => {
					return dispatch(fetchMovies());
				},
				error => dispatch(handleError(error))
			);
	};
};

export const deleteMovie = (id) => {
	return dispatch => {
		return MovieAPI
			.deleteMovie(id)
			.then(
				response => {
					return dispatch(fetchMovies());
				},
				error => dispatch(handleError(error))
			);
	};
};

export const createMovie = (movie) => {
	return dispatch => {
		return MovieAPI
			.createMovie(movie)
			.then(
				response => {
					return dispatch(fetchMovies());
				},
				error => dispatch(handleError(error))
			);
	};
};

