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

export default class ComingList extends Component {

	constructor(props){
		super(props);
		this.state = {
			coming: [],
			total: 1
		}
	}

	componentDidMount(){
		StatusBar.setNetworkActivityIndicatorVisible(true);
		this._loadData();
	}

	_loadData() {
		if(this.state.coming.length < this.state.total && !this.state.isLoading){
			StatusBar.setNetworkActivityIndicatorVisible(true);
			this.setState({
				isLoading: true
			});
			fetch("http://api.douban.com/v2/movie/coming_soon?start=" + this.state.coming.length)
			.then((response)=>response.json())
			.then((data)=>{
				this.setState({
					coming: this.state.coming.concat(data.subjects),
					total: data.total
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
				<NavigationBar title={titleConfig('In Theater')} statusBar={statusBarConfig} tintColor='midnightblue'/>
				<MovieList loadMore={this._loadData.bind(this)} navigator={this.props.navigator} style={{flex: 1, justifyContent: 'center', alignItems: 'center',}} data={this.state.coming} />
			</View>
		)
	}
}