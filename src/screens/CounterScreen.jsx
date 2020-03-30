import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
} from 'react-native';

const styles = StyleSheet.create({
  textStyle: {
    margin: 10,
    alignSelf: 'center',
  },
});

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
      <Text style={styles.textStyle}>
        Current Count:
        {counter}
      </Text>
    </View>
  );
};

export default CounterScreen;
