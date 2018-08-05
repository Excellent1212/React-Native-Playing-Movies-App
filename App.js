import React from 'react';
import TabNav from './components/BottomTabNavigator';

const apiKey = '14782eb910d2e42db2ba98769fe3ec58';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movies: [], isLoading: true, };
  }
  async fetchMovies(param, page) {
    const timeout = ms => new Promise(res => setTimeout(res, ms));
    try {
      let response = await fetch(`https://api.themoviedb.org/3/movie/${param}?api_key=${apiKey}&page=${page}`);
      let data = await response.json();
      await timeout(1000);
      this.setState({ movies: data.results, isLoading: false });
    } catch(err) { alert(err); }
  }
  async handleInputChange(inputText, param) {
    try {
      if (inputText.length > 0) {      
        let data = await (await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=${inputText}`)).json();
        this.setState({ movies: data.results });
      } else {
        this.handleRefresh(param);
      } 
    } catch(err) { alert(err); }
  }
  handleRefresh(param) {
    this.setState({ movies: [], isLoading: true, }, () => {this.fetchMovies(param, 1);});
  }
  componentDidMount() {
    this.fetchMovies('now_playing', 1);
  }
  render() {
    return (
      <TabNav 
        screenProps={{
          movies: this.state.movies,
          isLoading: this.state.isLoading,
          handleInputChange: this.handleInputChange.bind(this),
          fetchMovies: this.fetchMovies.bind(this),
          handleRefresh: this.handleRefresh.bind(this),
        }}   
      />
    );   
  }
}