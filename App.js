import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Unsplash from 'unsplash-js';
import { APP_ACCESS_KEY, APP_SECRET } from './config';

const unsplash = new Unsplash({
  applicationId: APP_ACCESS_KEY,
  secret: APP_SECRET,
});

console.log(unsplash);

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
