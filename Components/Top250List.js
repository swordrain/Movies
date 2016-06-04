import React, { Component } from 'react';
import {
  View,
  Text,
  Navigator,
  StatusBar,
  TouchableOpacity,
  Status
} from 'react-native';

import NavigationBar from 'react-native-navbar';
import MovieList from './MovieList';
import {statusBarConfig, titleConfig} from './NavBarConfig'

export default class Top250List extends Component {

	constructor(props){
		super(props);
		this.state = {
			movieTop250: [],
			isLoading: false
		}
	}

	componentDidMount(){
		StatusBar.setNetworkActivityIndicatorVisible(true);
		this._loadData();
	}

	_loadData() {
		if(this.state.movieTop250.length < 250 && !this.state.isLoading){
			StatusBar.setNetworkActivityIndicatorVisible(true);
			this.setState({
				isLoading: true
			});
			fetch("http://api.douban.com/v2/movie/top250?start=" + this.state.movieTop250.length)
			.then((response)=>response.json())
			.then((data)=>{
				this.setState({
					movieTop250: this.state.movieTop250.concat(data.subjects)
				});
				this.setState({
					isLoading: false
				});
				console.log(this.state);

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

	render() {
		
		return (
			<View style={{flex: 1}} >
				<NavigationBar title={titleConfig('Top 250')} statusBar={statusBarConfig} tintColor='midnightblue'/>
				<MovieList loadMore={this._loadData.bind(this)} navigator={this.props.navigator} style={{flex: 1, justifyContent: 'center', alignItems: 'center',}} data={this.state.movieTop250} />
			</View>
		)
	}
}