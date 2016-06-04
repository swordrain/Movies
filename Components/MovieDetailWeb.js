import React, { Component } from 'react';
import {
  View,
  WebView,
  StatusBar
} from 'react-native';
import NavigationBar from 'react-native-navbar';

import {statusBarConfig, titleConfig, backConfig, rightConfig} from './NavBarConfig';

export default class MovieDetailWeb extends Component {

	render(){

		return (
			<View style={{flex: 1}}>
				<NavigationBar leftButton={backConfig(this.props.navigator)} title={titleConfig('Douban Page')} statusBar={statusBarConfig} tintColor='midnightblue'/>
				<WebView onLoadStart={()=>{StatusBar.setNetworkActivityIndicatorVisible(true)}} onLoadEnd={()=>{StatusBar.setNetworkActivityIndicatorVisible(false)}} style={{flex: 1}} source={{uri: this.props.url}}/>

			</View>
			)
	}


}