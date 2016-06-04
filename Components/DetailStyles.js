import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';

export const styles = StyleSheet.create({
  scrollView: {
    padding: 5
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 8
  },
  imagesContainer: {
    flexDirection: 'row'
  },
  imageContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 75
  },
  image: {
    width: 70, 
    height:100,
  },
  imageName: {
    fontSize: 12
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 280,
    width: 200
  },
  modalImage: {
    width: 200,
    height: 280,
  }

});