import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import SearchBar from './SearchBar.js';
import MovieCarousel from './MovieCarousel';
import PropTypes from 'prop-types';

const TopRatedScreen = (props) => {
  let isLoading  = props.screenProps.isLoading;
  let topRatedMovies = props.screenProps.movies;
  return (
    <View style={styles.container}>
      <SearchBar
        param = 'top_rated'
        handleInputChange = {props.screenProps.handleInputChange}
        handleRefresh = {props.screenProps.handleRefresh} />
      {isLoading ?
        <View style={{flex: 1, justifyContent: 'space-around'}}>
          <Text style={styles.loadingText}>Refreshing movies... Getting popcorn...</Text>
          <ActivityIndicator size="large" color="#fadc48" />
        </View> : null} 
      <MovieCarousel movies = { topRatedMovies } navigation = { props.navigation } />
    </View>
  );
};

TopRatedScreen.propTypes = {
  screenProps: PropTypes.object.isRequired, 
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    color: '#fadc48',
    fontWeight: 'bold', 
    fontSize: 15,
  }
});

export default TopRatedScreen;
