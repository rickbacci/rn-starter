import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  textStyle: {
    margin: 5,
    textAlign: 'center',
  },
  viewStyle: {
    margin: 2,
    textAlign: 'center',
    borderColor: 'black',
    borderWidth: 2,
  },
  buttonStyle: {
    padding: 5,
    margin: 5,
  },
});

const ColorCounter = ({ color, onIncrease, onDecrease }) => (
  <View style={styles.viewStyle}>
    <Text style={styles.textStyle}>{color}</Text>
    <Button
      style={styles.buttonStyle}
      onPress={() => onIncrease()}
      title={`Increase ${color}`}
    />
    <Button
      style={styles.buttonStyle}
      onPress={() => onDecrease()}
      title={`Decrease ${color}`}
    />
  </View>
);

ColorCounter.propTypes = {
  color: PropTypes.string.isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired,
};

export default ColorCounter;
