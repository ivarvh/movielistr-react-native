import React from 'react';
import {connect} from 'react-redux';
import {Text, ListView, View, StyleSheet} from 'react-native';

const mapStateToProps = (state) => {
	const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id != r2.id});
	return {
		movies: ds.cloneWithRows(state.movies.movies)
	};
};

const renderRow = ({title}, sectionId, rowId) => {
	return (
		<View style={styles.movieListItemStyle}>
			<Text style={styles.movieListItemTextStyle}>{title}</Text>
		</View>
	);
};

const MovieList = ({movies}) => {
	return (
		<View style={styles.viewStyle}>
			<ListView
				style={styles.listStyle}
				dataSource={movies}
				renderRow={renderRow}
			/>
		</View>
	)
};

export default connect(mapStateToProps)(MovieList);

let styles = StyleSheet.create({
	viewStyle: {
	},
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
