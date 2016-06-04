import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

import {styles} from './DetailStyles';

export default class MovieDetailDirector extends Component {
  _showModal(url) {
    this.props.showModal(url);
  }
	render() {
		return(
			<View style={styles.section}>
          <Text style={styles.title}>Director</Text>
          <View style={styles.imagesContainer}>
          {
            this.props.directors.map((item, index) => {
              return (
                <View key={index} style={styles.imageContainer}>
                <TouchableOpacity onPress={this._showModal.bind(this, item.avatars.large)}>
                  <Image source={{uri: item.avatars.medium}} style={styles.image} />
                  </TouchableOpacity>
                  <Text style={styles.imageName}>{item.name}</Text>
                </View>
                )
            })
          }
          </View>
        </View>
			)
	}
}