import React from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';

const SearchBar = (props) => {
  return (
    <TextInput
      style={{
        height: 40, 
        width: '80%', 
        backgroundColor: '#f5f5f5',
        paddingLeft: 30,
        margin: 30,
        borderWidth: 1,
        borderColor: 'rgba(255, 73, 95, 0.5)', 
        borderRadius: 20,
      }}
      onChangeText={(e) => props.handleInputChange(e, props.param)}
      maxLength={30}
      placeholder='Search for a movie'
      placeholderTextColor='#f49093'
      clearButtonMode='always'
      selectionColor='#e50914'
      selectTextOnFocus={true}
    />
  );
};

SearchBar.propTypes = { 
  handleInputChange: PropTypes.func.isRequired,
  handleRefresh: PropTypes.func.isRequired,
  param: PropTypes.string.isRequired, 
};

export default SearchBar;