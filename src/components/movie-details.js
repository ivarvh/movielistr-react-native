import React from 'react';
import {connect} from 'react-redux';
import {Text, StyleSheet} from 'react-native';
import {Grid, Container, Content, Col, Row, Button} from 'native-base';
import {Actions} from 'react-native-router-flux';

const mapDispatchToProps = (dispatch) => {
	return {};
}

const mapStateToProps = (state) => {
	return {};
};

const Component = ({data: movie}) => {
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
				<Button block onPress={()=> {
					Actions.updateMovie({initialValues: movie})
				}}>Edit</Button>
			</Content>
		</Container>
	);
};

let styles = StyleSheet.create({
	rowStyle: {
		padding: 10
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);

