import React from 'react';
import {connect} from 'react-redux';
import MovieList from './movie-list';
import {Router, Scene} from 'react-native-router-flux';

const Root = () => {
	return (
		<Router>
			<Scene key="root" style={sceneStyle}>
				<Scene key="movieList" component={MovieList} title="Movies" initial="true"/>
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


