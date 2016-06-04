import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import {styles} from './DetailStyles';

export default class MovieDetailOriginalTitle extends Component {
	render() {
		return(
			<View style={styles.section}><Text style={styles.title}>Original Title</Text><Text>{this.props.original_title}</Text></View>

			)
	}
}