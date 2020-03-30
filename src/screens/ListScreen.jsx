import React from 'react';
import {
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 30,
    fontSize: 25,
    alignSelf: 'center',
    borderColor: 'black',
    borderWidth: 5,
    padding: 15,

  },
});

const ListScreen = () => {
  const friends = [
    { name: 'friend#1', age: 20 },
    { name: 'friend#2', age: 21 },
    { name: 'friend#3', age: 22 },
    { name: 'friend#4', age: 23 },
    { name: 'friend#5', age: 24 },
    { name: 'friend#6', age: 25 },
    { name: 'friend#7', age: 26 },
  ];

  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => (
        <Text style={styles.textStyle}>
          {item.name}
          - Age:
          {item.age}
        </Text>
      )}
    />
  );
};

export default ListScreen;
