import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  viewStyle: {
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: 5,
    padding: 5,
  },
  imageStyle: {
    borderColor: 'grey',
    borderWidth: 5,
    borderRadius: 15,
  },
});

const ImageDetail = ({ imageSource, title, imageScore }) => (
  <View style={styles.viewStyle}>
    <Text>{title}</Text>
    <Image style={styles.imageStyle} source={imageSource} />
    <Text>
      Image score -
      {imageScore}
    </Text>
  </View>
);

ImageDetail.propTypes = {
  title: PropTypes.string.isRequired,
  imageScore: PropTypes.number.isRequired,
  imageSource: PropTypes.string.isRequired,
};

export default ImageDetail;
