import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import MovieItem from './MovieItem';
import { createStackNavigator } from 'react-navigation';
import DetailsScreen from './DetailsScreen';

const MOVIES = [
  {
    id: 1,
    title: 'Jurassic Park'
  },
  {
    id: 2,
    title: 'Ant Man'
  },
  {
    id: 3,
    title: 'Mission Impossible'
  }
]

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'One-Stop Movies'
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>One-Stop Movies</Text>
        <FlatList 
          data={MOVIES} 
          renderItem={ ({item}) => <MovieItem {...item} navigation={this.props.navigation}/> }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: 'Home'
  }
)

export default class App extends React.Component {
  render() {
    return <RootStack/>;
  }
}