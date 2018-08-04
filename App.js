import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';

const apiKey = '14782eb910d2e42db2ba98769fe3ec58';

const RootStack = createStackNavigator(
  {
    Home: { 
      screen: HomeScreen,
      navigationOptions: { title: 'One-Stop Movies' },
    },
    Details: { 
      screen: DetailsScreen,
      navigationOptions: ({navigation}) => { return { title: navigation.getParam('title') }; }
    }
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
      let response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`);
      let data = await response.json();
      await timeout(1500);
      this.setState({ 
        movies: data.results,
        isLoading: false
      });
    } catch(err) { alert(err); }
  }

  async handleInputChange(inputText) {
    if (inputText.length > 0) {
      try {
        let data = await (await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=${inputText}`)).json();
        this.setState({ movies: data.results });
      } catch(err) { alert(err); }
    }
  }

  onRefresh() {
    this.setState({
      movies: []
    }, () => {this.fetchMovies();});
  }

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    return (
      <RootStack 
        screenProps={{
          movies: this.state.movies,
          handleInputChange: this.handleInputChange.bind(this),
          onRefresh: this.onRefresh.bind(this)
        }}   
      />
    );   
  }
}