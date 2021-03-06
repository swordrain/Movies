import React, { Component } from 'react';
import {
  View,
  Text,
  TabBarIOS,
  StyleSheet,
  StatusBar
} from 'react-native';
import Top250Nav from './Top250Nav';
import InTheaterNav from './InTheaterNav';
import ComingNav from './ComingNav';
import SearchNav from './SearchNav';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedTab : 'top250'
    }
  }

	render() {
		return (
			<TabBarIOS
        style={{backgroundColor: '#F5FCFF'}}
        tintColor="white"
        barTintColor="midnightblue"
        translucent={true}>
        <TabBarIOS.Item icon={require('../image/popular.png')} title="Top 250"
          selected={this.state.selectedTab === 'top250'}
          onPress={() => {
            this.setState({
              selectedTab: 'top250',
            });
          }}
        >
          <Top250Nav></Top250Nav>
        </TabBarIOS.Item>
        <TabBarIOS.Item icon={require('../image/theater.png')} title="In theater"
            selected={this.state.selectedTab === 'inTheater'}
            onPress={() => {
              this.setState({
                selectedTab: 'inTheater',
              });
            }}>
          <InTheaterNav></InTheaterNav>
        </TabBarIOS.Item>
        <TabBarIOS.Item icon={require('../image/coming.png')} title="Coming"
          selected={this.state.selectedTab === 'coming'}
            onPress={() => {
              this.setState({
                selectedTab: 'coming',
              });
            }}
        >
          <ComingNav></ComingNav>
        </TabBarIOS.Item>
        <TabBarIOS.Item systemIcon='search'
          selected={this.state.selectedTab === 'favorites'}
            onPress={() => {
              this.setState({
                selectedTab: 'favorites',
              });
            }}
        >
          <SearchNav></SearchNav>
        </TabBarIOS.Item>
      </TabBarIOS>
      )
	}
}	
