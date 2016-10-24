import 'whatwg-fetch';
import checkStatus from 'fetch-check-http-status';

const BASE_URL = 'http://localhost:8091/application/movies';
const JSON_HEADERS = {
	'Accept': 'application/json',
	'Content-Type': 'application/json',
};

class MovieAPI {

	constructor() {
	}

	getMovies() {
		return fetch(BASE_URL).then(checkStatus);
	}

	createMovie(movie) {
		return fetch(BASE_URL,
			{
				method: 'POST',
				headers: JSON_HEADERS,
				body: JSON.stringify(movie)
			}).then(checkStatus);
	}

	updateMovie(movie) {
		return fetch(BASE_URL + '/' + movie.id,
			{
				method: 'PUT',
				headers: JSON_HEADERS,
				body: JSON.stringify(movie)
			}).then(checkStatus);
	}

	deleteMovie(id) {
		return fetch(BASE_URL + '/' + id,
			{
				method: 'DELETE'
			}).then(checkStatus);
	}

}

let movieAPI = new MovieAPI();

export default movieAPI;