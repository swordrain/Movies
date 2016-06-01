import React, { Component } from 'react';
import {
  View,
  Text,
  Navigator,
  StatusBar,
  TouchableOpacity,
  Status
} from 'react-native';

import Top250List from './Top250List';
import MovieDetail from './MovieDetail';

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

export default class Top250Nav extends Component{

	_renderScene(route, navigator) {
		var routeId = route.id;
		switch(routeId){
			case 'Top250List':
				return <Top250List navigator={navigator}/>;
			case 'Detail':
				return <MovieDetail navigator={navigator} {...route}/>
		}
	}

	render(){
			let defaultId = 'Top250List';
	        return (

		        <Navigator
		          initialRoute={{ id: defaultId}}
		          renderScene={this._renderScene.bind(this)}
		          //configureScene={(route, routeStack) => Navigator.SceneConfigs.HorizontalSwipeJumpFromRight}
		           />
		          )
	}
}