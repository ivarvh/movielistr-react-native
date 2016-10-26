import React from 'react';
import {Button, Input, InputGroup, List, ListItem, Container, Content, Icon} from 'native-base';
import {Text, Switch, StyleSheet} from 'react-native';
import {Field, reduxForm} from 'redux-form';
import {validate} from '../validators/movie-form-validator';

const options = {};

const MovieForm = ({handleSubmit, initialValues, pristine, submitting, error, touched}) => {

	const renderInputField = ({input, input: {onChange, value}, meta: {touched, error}, placeholder, style, keyboardType}) => {
		return (
			<ListItem>
				<InputGroup error={error && touched} iconRight>
					{error && touched && <Icon name='ios-close-circle' style={{color: 'red'}}/>}
					<Input onChange={onChange}
						   style={style}
						   onBlur={(value) => onChange(value)}
						   value={value ? value.toString() : ''}
						   keyboardType={keyboardType}
						   placeholder={placeholder}/>
				</InputGroup>
			</ListItem>
		);
	};

	const renderSwitch = ({input, input: {onChange, value}, label}) => {
		return (
			<ListItem style={styles.switchListItem}>
				<Text style={styles.switchLabel}>{label}</Text>
				<Switch
					style={styles.switchStyle}
					onValueChange={value => onChange(value)}
					onChange={onChange}
					value={typeof value == "boolean" ? value : value == "true"}
				/>
			</ListItem>
		);
	};

	return (
		<Container>
			<Content
				keyboardShouldPersistTaps={true}>
				<List>
					<Field name="title"
						   component={renderInputField}
						   placeholder="Title"
						   label="Title"/>
					<Field name="director.firstName"
						   component={renderInputField}
						   placeholder="Director's first name"/>
					<Field name="director.lastName"
						   component={renderInputField}
						   placeholder="Director's last name"/>
					<Field name="duration"
						   component={renderInputField}
						   keyboardType="numeric"
						   placeholder="Duration"
						   label="Duration"/>
					<Field name="year"
						   component={renderInputField}
						   keyboardType="numeric"
						   placeholder="Year"
						   label="Year"/>
					<Field name="rating"
						   component={renderInputField}
						   keyboardType="numeric"
						   placeholder="Rating"
						   label="Rating"/>
					<Field name="seen"
						   component={renderSwitch}
						   label="Seen"/>
				</List>
				<Button block onPress={handleSubmit}>Save</Button>
			</Content>
		</Container>
	);
};

const styles = StyleSheet.create({
	switchListItem: {
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'space-between'
	},
	switchLabel: {
		flex: 1,
		marginLeft: 10
	},
	fullWidthInput: {
		flex: 1
	},
	columnListItem: {
		flexDirection: 'column'
	}
});

export default reduxForm({
	form: 'movie-form',
	validate
})(MovieForm);
