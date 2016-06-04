import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import {styles} from './DetailStyles';

export default class MovieDetailSummary extends Component {
	render() {
		return(
			<View style={styles.section}><Text style={styles.title}>Summary</Text><Text>{this.props.summary}</Text></View>
		)
	}
}