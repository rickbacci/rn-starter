import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  StyleSheet,
  View,
  Button,
} from 'react-native';

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    alignSelf: 'center',
    margin: 10,
  },
});

const HomeScreen = ({ navigation }) => (
  <View>
    <Text style={styles.textStyle}>HomeScreen</Text>
    <Button
      title="Go to Components Demo"
      onPress={() => navigation.navigate('Components')}
    />
    <Button
      title="Go to List Demo"
      onPress={() => navigation.navigate('List')}
    />
    <Button
      title="Go to Images Demo"
      onPress={() => navigation.navigate('Images')}
    />
    <Button
      title="Go to Counter Demo"
      onPress={() => navigation.navigate('Counter')}
    />
    <Button
      title="Go to Colors Demo"
      onPress={() => navigation.navigate('Colors')}
    />
    <Button
      title="Go to Square Demo"
      onPress={() => navigation.navigate('Square')}
    />
    <Button
      title="Go to Text Demo"
      onPress={() => navigation.navigate('Text')}
    />
    <Button
      title="Go to Box Demo"
      onPress={() => navigation.navigate('Box')}
    />
  </View>
);

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default HomeScreen;
