import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

export default class MovieItem extends React.Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    title: PropTypes.string.isRequired,
  }
  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Details', {title: this.props.title})}>
          <Text> {this.props.title} </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
