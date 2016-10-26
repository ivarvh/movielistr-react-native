import React, {StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {createMovie} from '../reducers/movies';
import MovieForm from './movie-form';
import {Actions} from 'react-native-router-flux';

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onSubmit: (movie) => {
			dispatch(createMovie(movie))
				.then(()=> {
					ownProps.resetForm();
					Actions.movieList();
				});
		}
	};
}

const mapStateToProps = (state) => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieForm);

let styles = StyleSheet.create({});
