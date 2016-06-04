import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import {styles} from './DetailStyles';

export default class MovieDetailRating extends Component {
	render() {
		return(
			<View style={styles.section}>
          <Text style={styles.title}>Rating</Text>
          <Text>{this.props.rating.average}</Text>
        </View>  
		)
	}
}