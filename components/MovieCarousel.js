import React from 'react';
import { Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import MovieItem from './MovieItem';
import PropTypes from 'prop-types';

export default class MovieCarousel extends React.Component {
  static propTypes = {
    movies: PropTypes.array.isRequired, 
    navigation: PropTypes.object.isRequired,
  }
  _renderItem({ item, index }) {
    return <MovieItem movie={item} key={index} navigation={this.props.navigation}/>;
  }
  render() {
    return (
      <Carousel
        ref={c => {this._carousel = c;}}
        data={this.props.movies}
        renderItem={this._renderItem.bind(this)}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={280 + 20 * 2}
        navigation={this.props.navigation} 
      />
    );
  }
}