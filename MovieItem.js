//import liraries
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// create a component
export default class MovieItem extends Component {
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