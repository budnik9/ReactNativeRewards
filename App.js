import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  text: {
    marginTop: 32,
    paddingHorizontal: 24,
    fontSize: 30,
  },
});

const App = () => {
  return (
    <View>
      <Text style={styles.text}>New React Native App</Text>
    </View>
  );
};

export default App;
