import React from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native-elements';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      client_id: '3ab52700b5843c4aa63c29db436b8d854cdcbd9e8917a6fb378a22c7ddda07f6',
    }
  }

  componentDidMount() {
    this.makeRequest();
  }

  makeRequest = () => {
    const { client_id } = this.state;
  const url = `https://api.unsplash.com/photos?client_id=${client_id}&page=1`;
    return fetch(url).then((response) => {
      response.json()
      console.log(response);
      this.setState({
        isLoading: false,
        data: [response]
      })
    })
    .catch((error) => {
      console.error(error)
    })
  }

  renderLoading = () => {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator />
        </View>
      )
    }
  }

  render() {
    const { data } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Resplash App</Text>
        <Text>A clone of Unsplash don't take it too seriously 😃</Text>
        <FlatList
          data={data}
          renderItem={({item, index}) => (
            <Image
              source={{uri: item.urls }}
              style={{ width: 100, height: 100}}
              PlaceholderContent={<ActivityIndicator />}
            />
          )}
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
  },
  item: {
    fontSize: 34,
  }
});
