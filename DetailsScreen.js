import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

export default class DetailsScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func.isRequired,
    }).isRequired,
  }
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('title')
    };
  }
  render() {
    return (
      <View>
        <Text> { this.props.navigation.getParam('title') } </Text>
      </View>
    );
  }
}