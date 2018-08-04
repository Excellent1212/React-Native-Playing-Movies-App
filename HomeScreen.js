import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import MovieItem from './MovieItem';
import PropTypes from 'prop-types';

export default class HomeScreen extends React.Component {
  static propTypes = {
    screenProps: PropTypes.object.isRequired, 
    navigation: PropTypes.object.isRequired,
  }
  static navigationOptions = {
    title: 'One-Stop Movies'
  };
  render() {
    const screenProps = this.props.screenProps;
    return (
      <View style={styles.container}>
        <FlatList 
          data = { screenProps.movies } 
          renderItem = { ({item}) => <MovieItem {...item} navigation={this.props.navigation}/> }
          keyExtractor = { item => item.id.toString() }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});