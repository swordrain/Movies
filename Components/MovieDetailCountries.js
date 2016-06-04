import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import {styles} from './DetailStyles';

export default class MovieDetailCountries extends Component {
	render() {
		return(
			<View style={styles.section}>
          <Text style={styles.title}>Countries</Text>
          {
            this.props.countries.map((item, index)=> {
                return (
                  <Text key={index}>{item}</Text>
                )
            })
          }
        </View>
		)
	}
}