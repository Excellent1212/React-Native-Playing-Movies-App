import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

export default class MovieItem extends React.Component {
  static propTypes = {
    navigation: PropTypes.shape({navigate: PropTypes.func.isRequired,}).isRequired,
    movie: PropTypes.shape({
      poster_path: PropTypes.string.isRequired,
    }).isRequired,
  }
  render () {
    return (
      <View>
        <TouchableOpacity 
          activeOpacity={1}
          onPress={() => this.props.navigation.navigate('Details', {movie: this.props.movie})}>
          <Image 
            style={{width: 342, height: 513}}
            source={{uri: `https://image.tmdb.org/t/p/w342${this.props.movie.poster_path}`}}
          />;
        </TouchableOpacity>
      </View>
    );
  }
}