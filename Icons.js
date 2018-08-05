import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

export const NowPlayingIcon = ({ tintColor, focused }) => {
  return <Icon name={focused ? 'ios-film' : 'ios-film-outline'} size={28} style={{ color: tintColor }} />;
}; 
NowPlayingIcon.propTypes = { tintColor: PropTypes.string.isRequired, focused: PropTypes.bool.isRequired, };

export const TopRatedIcon = ({ tintColor, focused }) => {
  return <Icon name={focused ? 'ios-flame' : 'ios-flame-outline'} size={28} style={{ color: tintColor }} />;
}; 
TopRatedIcon.propTypes = { tintColor: PropTypes.string.isRequired, focused: PropTypes.bool.isRequired, };