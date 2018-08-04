import React from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';

export default class SearchBar extends React.Component {
  static propTypes = {
    handleInputChange: PropTypes.func.isRequired,
  }
  render() {
    return (
      <TextInput
        style={{
          height: 40, 
          width: '80%', 
          backgroundColor: '#f5f5f5',
          paddingLeft: 30,
          margin: 30,
          borderColor: 'black', 
          borderWidth: 1,
          borderRadius: 20,
        }}
        onChangeText={(e) => this.props.handleInputChange(e)}
        placeholder="Search for a movie"
      />
    );
  }
}