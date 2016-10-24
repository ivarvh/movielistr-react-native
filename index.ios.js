/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import Root from './src/components/root';
import MovieStore from './src/reducers/movielistr';

export default class movielistrReactNative extends Component {
	render() {
		return (
			<Provider store={MovieStore}>
				<Root/>
			</Provider>
		);
	}
}

AppRegistry.registerComponent('movielistrReactNative', () => movielistrReactNative);
