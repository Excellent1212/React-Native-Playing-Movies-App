import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';

const api_key = '14782eb910d2e42db2ba98769fe3ec58';

const RootStack = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Details: { screen: DetailsScreen }
  },
  {
    initialRouteName: 'Home'
  }
);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      isLoading: true,
    };
  }

  async fetchMovies() {
    const timeout = ms => new Promise(res => setTimeout(res, ms));
    try {
      let response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}`);
      let data = await response.json();
      await timeout(1500);
      this.setState({ 
        movies: data.results,
        isLoading: false
      });
    } catch(err) { alert(err); }
  }

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    return (
      <RootStack 
        screenProps={{
          movies: this.state.movies,
        }}
      />
    );   
  }
}