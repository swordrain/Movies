import React, { Component } from 'react';
import {
  View,
  Text,
  ListView,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicatorIOS
} from 'react-native';

import MovieDetail from './MovieDetail';


export default class MovieList extends Component {

	constructor(props) {
	  	super(props);
	  	this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	  	this.state = {
	    	dataSource: this.ds.cloneWithRows([]),
	  	};
	}

	componentWillReceiveProps(nextProps) {
		console.log(nextProps);
		this.setState({
			dataSource: this.ds.cloneWithRows(nextProps.data)
		})
	}
	_renderRow(movie) {
		return (
			<TouchableOpacity onPress={this._gotoDetail.bind(this, movie.id)}>
				<View style={styles.rowView}>
					<Image source={{uri: movie.images.medium}} style={styles.movieImage}>
					</Image>
					<View style={styles.movieSummary}>
						<Text style={styles.movieTitle}>
						{movie.title}
						</Text>
						<Text style={styles.movieOriginalTitle}>
							{movie.original_title}
						</Text>
						 <Text style={styles.movieYear}>{movie.year}</Text>
					</View>
					<View>
						<Text style={styles.detailIndicator}> &gt;</Text>
					</View>
				</View>
			</TouchableOpacity>
		);
	}

	_gotoDetail(movieId) {
		const { navigator } = this.props;
		if(navigator) {
            navigator.push({
                id: 'Detail',
                movieId: movieId,
            });
        }
	}

	render() {
		var content;
		if(this.state.dataSource.getRowCount() === 0){
			content = <ActivityIndicatorIOS size='large'/>;
		} else{
			content = 
				
				(<ListView style={styles.listView}
					dataSource={this.state.dataSource}
      				renderRow={this._renderRow.bind(this)}
      				
				/>)
		}
		return (<View style={styles.movieList}>
				{content}
				</View>) ;
	}
}

let styles = StyleSheet.create({
	separator: {
		borderBottomWidth:1,
		borderBottomColor: 'gray'
	},
	movieList: {
		flex: 1,
    	backgroundColor: '#F5FCFF',
    	marginBottom: 50,
    	justifyContent: 'center',
    	alignItems: 'center',
	},
	listView: {
		flex: 1,
	},
	rowView: {
		height: 110, 
		flexDirection: 'row', 
		alignItems:'center',
		borderBottomWidth:1,
		borderBottomColor: 'gray'
	},
	movieImage: {
		width: 70, 
		height:100,
		marginLeft: 5
	},
	movieSummary: {
		flex:1,
		marginLeft: 10,
		marginRight: 10
	},
	detailIndicator: {
		marginRight: 16,
		fontSize: 16
	},
	movieTitle: {
		fontSize: 16
	},
	movieOriginalTitle: {
		fontSize: 14
	},
	movieYear: {
		fontSize: 12
	}

})