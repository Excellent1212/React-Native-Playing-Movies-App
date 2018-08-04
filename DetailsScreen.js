import React from 'react'
import { Text, View } from 'react-native'

export default class DetailsScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('title')
    }
  }
  render() {
    console.log('test');
    return (
      <View>
        <Text> { this.props.navigation.getParam('title') } </Text>
      </View>
    )
  }
}