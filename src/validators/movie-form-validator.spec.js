import {validate} from './movie-form-validator';
import expect from 'expect';

describe('movie-validator: ', () => {

	it('title is required', () => {
		let movie = {
			title: ''
		};

		var errors = validate(movie);

		expect(errors.title).toEqual('Title is required.');
	});

	it('title is required', () => {
		let movie = {};

		var errors = validate(movie);

		expect(errors.title).toEqual('Title is required.');
	});

	it('title is required', () => {
		let movie = {
			title: 'title'
		};

		var errors = validate(movie);

		expect(errors.title).toNotExist();
	});

	it('Director first name is required', () => {
		let movie = {
			director: {
				firstName: ''
			}
		};

		var errors = validate(movie);

		expect(errors.director.firstName).toEqual('First name is required.');
	});

	it('Director first name is required', () => {
		let movie = {
			director: {}
		};

		var errors = validate(movie);

		expect(errors.director.firstName).toEqual('First name is required.');
	});

	it('Director first name is required', () => {
		let movie = {
			director: {
				firstName: 'bla'
			}
		};

		var errors = validate(movie);

		expect(errors.director.firstName).toNotExist();
	});

	it('Director last name is required', () => {

		let movie = {
			director: {
				lastName: ''
			}
		};

		var errors = validate(movie);

		expect(errors.director.lastName).toEqual('Last name is required.');
	});

	it('Director last name is required', () => {

		let movie = {
			director: {}
		};

		var errors = validate(movie);

		expect(errors.director.lastName).toEqual('Last name is required.');
	});

	it('Director last name is required', () => {

		let movie = {
			director: {
				lastName: 'bla'
			}
		};

		var errors = validate(movie);

		expect(errors.director.lastName).toNotExist();
	});

	it('Duration must be between 0 and 60.000. Too much gives an error.', () => {

		let movie = {
			duration: 60001
		};

		var errors = validate(movie);

		expect(errors.duration).toEqual('Duration must be between 0 and 60.000.');
	});

	it('Duration must be between 0 and 60.000. Negative number gives an error.', () => {

		let movie = {
			duration: -1
		};

		var errors = validate(movie);

		expect(errors.duration).toEqual('Duration must be between 0 and 60.000.');
	});

	it('Duration is required.', () => {

		let movie = {
		};

		var errors = validate(movie);

		expect(errors.duration).toEqual('Duration must be between 0 and 60.000.');
	});


	it('Duration must be between 0 and 60.000. Correct duration gives no error.', () => {

		let movie = {
			duration: 100
		};

		var errors = validate(movie);

		expect(errors.duration).toNotExist();
	});

	it('Year is required. No year gives error.', () => {

		let movie = {
		};

		var errors = validate(movie);

		expect(errors.year).toEqual('Year must be between 1880 and 2100.');
	});

	it('Year must be between 1880 and 2100. Correct year gives no error.', () => {

		let movie = {
			year: 2000
		};

		var errors = validate(movie);

		expect(errors.year).toNotExist();
	});

	it('Year must be between 1880 and 2100. Lower year gives error.', () => {

		let movie = {
			year: 1700
		};

		var errors = validate(movie);

		expect(errors.year).toEqual('Year must be between 1880 and 2100.');
	});

	it('Year must be between 1880 and 2100. Higher year gives error.', () => {

		let movie = {
			year: 2200
		};

		var errors = validate(movie);

		expect(errors.year).toEqual('Year must be between 1880 and 2100.');
	});

});