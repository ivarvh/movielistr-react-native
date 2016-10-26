import React from 'react';
import {connect} from 'react-redux';
import {Text, StyleSheet} from 'react-native';
import {Grid, Container, Content, Col, Row, Button, Icon} from 'native-base';
import {Actions} from 'react-native-router-flux';
import {deleteMovie} from '../reducers/movies';

const mapDispatchToProps = (dispatch) => {
	return {
		deleteMovie: (movie) => {
			dispatch(deleteMovie(movie.id))
				.then(() => {
					Actions.movieList();
				});
		}
	};
}

const mapStateToProps = (state) => {
	return {};
};

const Component = ({data: movie, deleteMovie}) => {
	return (
		<Container>
			<Content>
				<Grid>
					<Col size={20}>
						<Row style={styles.rowStyle}><Text>Title:</Text></Row>
						<Row style={styles.rowStyle}><Text>Director:</Text></Row>
						<Row style={styles.rowStyle}><Text>Duration:</Text></Row>
						<Row style={styles.rowStyle}><Text>Rating:</Text></Row>
						<Row style={styles.rowStyle}><Text>Seen:</Text></Row>
					</Col>
					<Col size={80}>
						<Row style={styles.rowStyle}><Text>{movie.title}</Text></Row>
						<Row
							style={styles.rowStyle}><Text>{movie.director.firstName} {movie.director.lastName}</Text></Row>
						<Row style={styles.rowStyle}><Text>{movie.duration}</Text></Row>
						<Row style={styles.rowStyle}><Text>{movie.rating}</Text></Row>
						<Row style={styles.rowStyle}><Text>{movie.seen ? 'Yes' : 'No'}</Text></Row>
					</Col>
				</Grid>
				<Button style={styles.buttonStyle} block onPress={()=> {
					Actions.updateMovie({initialValues: movie})
				}}>
					Edit
				</Button>
				<Button style={styles.buttonStyle} block danger onPress={() => deleteMovie(movie)}>
					Delete
				</Button>
			</Content>
		</Container>
	);
};

let styles = StyleSheet.create({
	rowStyle: {
		padding: 10
	},
	buttonStyle: {
		marginTop: 5,
		marginBottom: 5,
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);

