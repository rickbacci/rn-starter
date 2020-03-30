import React, { useState } from 'react';
import {
  View,
  Button,
  StyleSheet,
  FlatList,
} from 'react-native';

const randomRGB = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({
  flatListStyle: {
    margin: 15,
  },
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
});

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  return (
    <View style={styles.viewStyle}>
      <Button
        title="Add Color"
        onPress={() => {
          setColors([...colors, randomRGB()]);
        }}
      />
      <FlatList
        style={styles.flatListStyle}
        keyExtractor={(item) => item}
        data={colors}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={{
            margin: 5,
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 15,
            height: 200,
            width: 200,
            backgroundColor: item,
          }}
          />
        )}
      />
    </View>
  );
};

export default ColorScreen;
