import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  subHeaderStyle: {
    fontSize: 20,
  },
});

const ComponentsScreen = () => {
  const name = 'Ricky';

  return (
    <View>
      <Text style={styles.textStyle}>Getting started with React Native!</Text>
      <Text style={styles.subHeaderStyle}>
        Hello! My name is
        {name}
      </Text>
    </View>
  );
};

export default ComponentsScreen;
