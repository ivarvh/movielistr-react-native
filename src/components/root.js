import React from 'react';
import {connect} from 'react-redux';
import {Router, Scene} from 'react-native-router-flux';
import MovieList from './movie-list';
import MovieDetails from './movie-details';

const Root = () => {
	return (
		<Router>
			<Scene key="root" style={sceneStyle}>
				<Scene key="movieList" component={MovieList} title="Movies" initial="true"/>
				<Scene key="movieDetails" component={MovieDetails} title="Details"/>
			</Scene>
		</Router>
	)
};

export default connect()(Root);


const colors = {
	blue: '#1EC1F7',
	darkBlue: '#005673',
	lightBlue: '#E8F9FF',
	borderColor: '#005673',
	white: '#ffffff',
};

const navBarStyle = {
	backgroundColor: colors.blue,
	borderBottomColor: colors.darkBlue,
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'center',
	flex: 1
};

const sceneStyle = {
	flex: 1,
	paddingTop: 60,
	backgroundColor: colors.white
};


