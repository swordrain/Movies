import React, { Component } from 'react';
import {
  View,
  Text,
  Navigator,
  StatusBar,
  TouchableOpacity,
  Status
} from 'react-native';

import Search from './Search';

import MovieDetail from './MovieDetail';
import MovieDetailWeb from './MovieDetailWeb';

/*var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, nextState) {
    return null;
  },
  RightButton(route, navigator, index, nextState) {
    return null;
  },
  Title(route, navigator, index, nextState) {
    return (
        <Text style={{color: 'white', margin: 10, fontSize: 18}}>
          Top 250
        </Text>
    );
  }
};*/

export default class ComingNav extends Component{

	_renderScene(route, navigator) {
		var routeId = route.id;
		switch(routeId){
			case 'Search':
				return <Search navigator={navigator}/>;
			case 'Detail':
				return <MovieDetail navigator={navigator} {...route}/>
			case 'DetailWeb':
				return <MovieDetailWeb navigator={navigator} {...route} />
		}
	}

	render(){
			let defaultId = 'Search';
	        return (

		        <Navigator
		          initialRoute={{ id: defaultId}}
		          renderScene={this._renderScene.bind(this)}
		          //configureScene={(route, routeStack) => Navigator.SceneConfigs.HorizontalSwipeJumpFromRight}
		           />
		          )
	}
}