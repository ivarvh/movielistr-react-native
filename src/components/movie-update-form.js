import React, {StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {updateMovie} from '../reducers/movies';
import MovieForm from './movie-form';

const mapDispatchToProps = (dispatch) => {
	return {
		onSubmit: (movie) => {
			dispatch(updateMovie(movie))
				.then(()=> {
					console.log('Done!');
				});
		}
	};
}

const mapStateToProps = (state) => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieForm);

let styles = StyleSheet.create({});
