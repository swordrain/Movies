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
	_renderFooter() {
		if(this.props.isLoading){
			return;
		}else{
			return <ActivityIndicatorIOS size='small'/>
		}
	}

	render() {
		var content;
		if(this.state.dataSource.getRowCount() === 0 ){
			if(!this.props.showNoLoading){
				return (<View style={styles.indicatorContainer}>
					<ActivityIndicatorIOS size='large'/>
				</View>);
			}else{ //没有data的时候显示空View，否则ListView的onEndReached会被触发
				return <View></View>;
			}
		} else{
			//content = 
				//	不加enableEmptySections 会有警告
				return (<ListView enableEmptySections={true} style={styles.listView}
					dataSource={this.state.dataSource}
      				renderRow={this._renderRow.bind(this)}
      				onEndReached={this.props.loadMore}
      				onEndReachedThreshold={-20}
      				renderFooter={this._renderFooter.bind(this)}
				/>)
		}
	}
}

let styles = StyleSheet.create({
	separator: {
		borderBottomWidth:1,
		borderBottomColor: 'gray'
	},
	indicatorContainer: {
		flex: 1,
    	backgroundColor: '#F5FCFF',
    	marginBottom: 50,
    	justifyContent: 'center',
    	alignItems: 'center',
	},
	listView: {
		flex: 1,
		marginBottom: 50,
	},
	rowView: {
		height: 110, 
		flexDirection: 'row', 
		alignItems:'center',
		borderBottomWidth:1,
		borderBottomColor: 'gray',
		//flex: 1,
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
		fontSize: 16,
		fontWeight: 'bold',
	},
	movieOriginalTitle: {
		fontSize: 14,
	},
	movieYear: {
		fontSize: 12
	}

})