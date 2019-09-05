import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import unsplash from './config';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Resplash App</Text>
        <Text>A clone of Unsplash don't take it seriously</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 23,
  }
});
