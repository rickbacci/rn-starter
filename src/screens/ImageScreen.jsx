import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const forest = require('../../assets/forest.jpg');
const beach = require('../../assets/beach.jpg');
const mountain = require('../../assets/mountain.jpg');

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    alignSelf: 'center',
  },
});

const ImageScreen = () => (
  <View>
    <Text style={styles.textStyle}>Images</Text>
    <ImageDetail
      title="Forest"
      imageSource={forest}
      imageScore={9}
    />
    <ImageDetail
      title="Beach"
      imageSource={beach}
      imageScore={8}
    />
    <ImageDetail
      title="Mountain"
      imageSource={mountain}
      imageScore={7}
    />
  </View>
);

export default ImageScreen;
