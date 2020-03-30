import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  viewStyle: {
    borderColor: 'black',
    borderWidth: 3,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    height: 200,

  },
  textOneStyle: {
    borderColor: 'red',
    borderWidth: 3,
    margin: 5,
    padding: 10,
    alignSelf: 'flex-start',
  },
  textTwoStyle: {
    borderColor: 'red',
    borderWidth: 3,
    margin: 5,
    padding: 10,
    flex: 1,
    alignSelf: 'center',
    // ...StyleSheet.absoluteFillObject,
  },
  textThreeStyle: {
    borderColor: 'red',
    borderWidth: 3,
    margin: 5,
    padding: 10,
    alignSelf: 'flex-end',
  },
});

const BoxScreen = () => (
  <View style={styles.viewStyle}>
    <Text style={styles.textOneStyle}>Child #1</Text>
    <Text style={styles.textTwoStyle}>Child #2</Text>
    <Text style={styles.textThreeStyle}>Child #3</Text>
  </View>
);

export default BoxScreen;
