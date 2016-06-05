import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import NavigationBar from 'react-native-navbar';
import {statusBarConfig, titleConfig} from './NavBarConfig';
import MovieList from './MovieList';

export default class Search extends Component{

	constructor(props){
		super(props);
		this.state = {
			searchResult: [],
			total: 1,
			previousKeyWord: '',
			keyWord: '',
			isLoading: false
		}
	}

	_loadData(isFromSearchButton) {
		console.log('debug point');
		if(isFromSearchButton){
			this.setState({
				searchResult: [],
				total: 1,
				previousKeyWord: this.state.keyWord
			});
		}

		if(this.state.searchResult.length < this.state.total && !this.state.isLoading){
			
			var url 
			if(isFromSearchButton){
				url = "http://api.douban.com/v2/movie/search?start=" + this.state.searchResult.length + '&q=' + this.state.keyWord;
			} else{
				url = "http://api.douban.com/v2/movie/search?start=" + this.state.searchResult.length + '&q=' + this.state.previousKeyWord;
			}
			console.log(url);
			StatusBar.setNetworkActivityIndicatorVisible(true);
			this.setState({
				isLoading: true
			});
			fetch(url)
			.then((response)=>response.json())
			.then((data)=>{
				console.log('searchresult', data);
				this.setState({
					searchResult: this.state.searchResult.concat(data.subjects),
					total: data.total
				});
				this.setState({
					isLoading: false
				});

			StatusBar.setNetworkActivityIndicatorVisible(false);
			}).catch((error) => {
	    		alert(error);
	    		this.setState({
					isLoading: false
				});
				StatusBar.setNetworkActivityIndicatorVisible(false);
	  		});
		}
	}

	render(){
		return (<View style={styles.container}>
			<NavigationBar title={titleConfig('Search')} statusBar={statusBarConfig} tintColor='midnightblue'/>
			<View style={styles.searchInputContainer}>
				<TextInput autoCapitalize='none' autoCorrect={false}
				placeholder='Input a keyword for search' 
				selectionColor="midnightblue"
				clearButtonMode="always"
				enablesReturnKeyAutomatically={true}
				returnKeyType="search"
				style={styles.searchInput} 
				onSubmitEditing={(event) =>{this._loadData(true);}}
				onChange={(event) => {
      					this.setState({
        				keyWord: event.nativeEvent.text})}}/>
			</View>
			<MovieList showNoLoading={true} loadMore={this._loadData.bind(this, false)} navigator={this.props.navigator} 
				data={this.state.searchResult} />

		</View>);
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1
	},
	searchInputContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
    	alignItems: 'center',
    	borderBottomColor: 'black',
    	borderBottomWidth: 1,
	},
	searchInput: {
		flex: 1,
		height: 27, 
		borderColor: 'gray', 
		borderWidth: 1,
		margin: 5,
		borderRadius: 5,
		paddingLeft:5,
		paddingRight: 5
	}
});