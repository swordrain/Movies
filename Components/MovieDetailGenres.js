import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import {styles} from './DetailStyles';

export default class MovieDetailGenres extends Component {
	render() {
		return(
			<View style={styles.section}>
          <Text style={styles.title}>Genres</Text>
          {
            this.props.genres.map((item, index)=> {
              return (
                <Text key={index}>{item}</Text>
              )
            })
          }
          </View>
		)
	}
}