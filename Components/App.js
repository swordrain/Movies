import React, { Component } from 'react';
import {
  View,
  Text,
  TabBarIOS,
  StyleSheet
} from 'react-native';
import Top250 from './Top250';
import InTheater from './InTheater';
import Coming from './Coming';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedTab : 'top250',
      barTranslucent: true

    }
  }
	render() {
		return (
			<TabBarIOS
        tintColor="white"
        barTintColor="midnightblue"
        translucent={this.state.barTranslucent}>
        <TabBarIOS.Item icon={require('../image/popular.png')} title="Top 250"
          selected={this.state.selectedTab === 'top250'}
          onPress={() => {
            this.setState({
              selectedTab: 'top250',
            });
          }}
        >
          <Top250></Top250>
        </TabBarIOS.Item>
        <TabBarIOS.Item icon={require('../image/theater.png')} title="In theater"
            selected={this.state.selectedTab === 'inTheater'}
            onPress={() => {
              this.setState({
                selectedTab: 'inTheater',
              });
            }}>
          <InTheater></InTheater>
        </TabBarIOS.Item>
        <TabBarIOS.Item icon={require('../image/coming.png')} title="Coming"
          selected={this.state.selectedTab === 'coming'}
            onPress={() => {
              this.setState({
                selectedTab: 'coming',
              });
            }}
        >
          <Coming></Coming>
        </TabBarIOS.Item>
      </TabBarIOS>
      )
	}
}	

const styles = StyleSheet.create({


});