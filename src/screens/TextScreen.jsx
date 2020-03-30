import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
});

const TextScreen = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const invalidPassword = () => {
    if (password.length < 5) {
      return true;
    }
    return false;
  };

  const showWarning = () => (
    <Text>
      Password must be at least 5 characters long!
    </Text>
  );


  return (
    <View>
      <Text>
        Enter Name:
      </Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />
      <Text>
        Hello my name is:
        {name}
      </Text>
      <Text>
        Enter Password:
      </Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newValue) => setPassword(newValue)}
        secureTextEntry
      />
      {invalidPassword() ? showWarning() : null}
    </View>
  );
};

export default TextScreen;
