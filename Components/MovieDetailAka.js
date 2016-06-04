import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import {styles} from './DetailStyles';

export default class MovieDetailAka extends Component {
	render() {
		return(
			<View style={styles.section}>
            	<Text style={styles.title}>Aka</Text>
            	{
	              this.props.aka.map((item, index) => {
	                return <Text key={index}>{index+1}. {item}</Text>
	              })
            	}
          	</View>

			)
	}
}