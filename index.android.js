import React, {Component} from 'react';
import {AppRegistry} from 'react-native';

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
