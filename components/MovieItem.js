import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import PropTypes from 'prop-types';

export default class MovieItem extends React.Component {
  static propTypes = {
    navigation: PropTypes.shape({navigate: PropTypes.func.isRequired,}).isRequired,
    movie: PropTypes.shape({
      vote_average: PropTypes.number.isRequired, 
      poster_path: PropTypes.string.isRequired,
    }).isRequired,
  }
  render () {
    return (
      <View>
        <TouchableOpacity 
          activeOpacity={0.8}
          onPress={() => this.props.navigation.navigate('Details', {movie: this.props.movie})}>
          <Text style={styles.rating}> 
            { this.props.movie.vote_average.toFixed(1) } 
          </Text>
          <Image style={styles.image}
            source={{uri: `https://image.tmdb.org/t/p/w342${this.props.movie.poster_path}`}}
          />;
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rating: {
    position: 'absolute', 
    left: 5, 
    top: 5, 
    zIndex: 2,
    color: '#e50914',
    backgroundColor: '#fff',
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: '#e50914',
    borderRadius: 28,
    padding: 10,
    fontSize: 24,
    fontWeight: 'bold',
  },
  image: {
    width: 342, 
    height: 513,
    borderWidth: 3,
    borderColor: 'rgba(255,255,255,0.3)',
  }
});