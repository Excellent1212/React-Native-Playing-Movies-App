import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import SearchBar from './SearchBar';
import MovieCarousel from './MovieCarousel';
import PropTypes from 'prop-types';

export default class NowPlayingScreen extends React.Component {
  static propTypes = {
    screenProps: PropTypes.object.isRequired, 
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  }

  render() {
    let isLoading  = this.props.screenProps.isLoading;
    let nowPlayingMovies = this.props.screenProps.movies;
    return (
      <View style={styles.container}>
        <SearchBar
          param = 'now_playing'
          handleInputChange = {this.props.screenProps.handleInputChange}
          handleRefresh = {this.props.screenProps.handleRefresh}
        />
        {isLoading ?
          <View style={{flex: 1, justifyContent: 'space-around'}}>
            <Text style={styles.loadingText}>Refreshing movies... Getting popcorn...</Text>
            <ActivityIndicator size="large" color="#fadc48" />
          </View> : null} 
        <MovieCarousel 
          movies = { nowPlayingMovies }
          navigation = { this.props.navigation }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  loadingText: {
    color: '#fadc48',
    fontWeight: 'bold', 
    fontSize: 15,
  }
});