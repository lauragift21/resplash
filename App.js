import React from 'react';
import axios from 'axios';
import { ActivityIndicator, FlatList, StyleSheet, Text, View, Image } from 'react-native';
// import { Image } from 'react-native-elements';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      client_id: '3ab52700b5843c4aa63c29db436b8d854cdcbd9e8917a6fb378a22c7ddda07f6',
      data: []
    }
  }

  componentDidMount() {
    this.makeRequest();
  }

  makeRequest = async() => {
    const { client_id } = this.state;
    const unsplashResponse = await axios.get(
      `https://api.unsplash.com/photos?client_id=${client_id}&page=1&per_page=10`
    ).catch((error) => {
      console.error(error)
    });
    this.setState({ data: unsplashResponse.data});
  }

  render() {
    const { data } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Resplash App</Text>
        <Text>A clone of Unsplash don't take it too seriously 😃</Text>
        <FlatList
            data={data}
            numColumns={2}
            renderItem={({item, index}) => {
               return (
               <Image
                source={{uri: item.urls && item.urls.raw }}
                resizeMMode="contain"
                style={{ width: 250, height: 250}}
              />)
            }}
            keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  text: {
    fontSize: 33,
  }
});
