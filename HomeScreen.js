import React from 'react';
import { StyleSheet, View } from 'react-native';
import SearchBar from './SearchBar.js';
import MovieCarousel from './MovieCarousel';
import PropTypes from 'prop-types';

export default class HomeScreen extends React.Component {
  static propTypes = {
    screenProps: PropTypes.object.isRequired, 
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  }
  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          handleInputChange = {this.props.screenProps.handleInputChange}
        />
        <MovieCarousel 
          movies = { this.props.screenProps.movies }
          navigation = { this.props.navigation }
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
    justifyContent: 'center',
  },
});
