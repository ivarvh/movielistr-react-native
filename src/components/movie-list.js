import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Text} from 'react-native';
import {Container, Content, List, ListItem} from 'native-base';
import {Actions} from 'react-native-router-flux';

const mapStateToProps = (state) => {
	return {
		movies: state.movies.movies
	};
};

const renderRow = (movie) => {
	return (
		<ListItem>
			<Text onPress={() => Actions.movieDetails({data: movie})}>{movie.title}</Text>
		</ListItem>
	);
};

const MovieList = ({movies}) => {
	return (
		<Container style={styles.movieListItemStyle}>
			<Content>
				<List
					renderRow={renderRow}
					dataArray={movies}
				/>
			</Content>
		</Container>
	)
};

export default connect(mapStateToProps)(MovieList);

let styles = StyleSheet.create({
	viewStyle: {},
	listStyle: {
		flex: 1,
	},
	movieListItemTextStyle: {
		textAlign: 'center',
	},
	movieListItemStyle: {
		padding: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#000'
	}
});
