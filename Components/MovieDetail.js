import React, { Component } from 'react';
import {
  View,
  Text,
  Navigator,
  StatusBar,
  TouchableOpacity,
  ActivityIndicatorIOS
} from 'react-native';

import NavigationBar from 'react-native-navbar';
import {statusBarConfig, titleConfig, backConfig} from './NavBarConfig'

export default class MovieDetail extends Component {

  constructor(props){
    super(props);
    this.state = {
      movie: null
    }
  }

	componentDidMount() {
    StatusBar.setNetworkActivityIndicatorVisible(true);
    fetch("http://api.douban.com/v2/movie/subject/" + this.props.movieId)
    .then((response)=>response.json())
    .then((data)=>{
      this.setState({
        movie: data
      });

      StatusBar.setNetworkActivityIndicatorVisible(false);
    }).catch((error) => {
        alert(error);
        StatusBar.setNetworkActivityIndicatorVisible(false);
      });
  }
	render() {
    console.log(this.props);
    var content;
    var self = this;
    if(!this.state.movie){
      content = <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}><ActivityIndicatorIOS size='large'/></View>;
    }else{
      let movie = this.state.movie;
      content = <Text>{movie.summary}</Text>
    }
		return (
      
			<View style={{flex: 1}}>
        <NavigationBar leftButton={backConfig(this.props.navigator)} title={titleConfig('Movie Detail')} statusBar={statusBarConfig} tintColor='midnightblue'/>
        {content}
      </View>

			)
	}

}