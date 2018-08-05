import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

export default class DetailsScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func.isRequired,
    }).isRequired,
  }
  render() {
    let movie = this.props.navigation.getParam('movie');
    let overview = '';
    if (movie.overview.length > 400) { overview = movie.overview.substring(0, 400) + ' ...'; } 
    else { overview = movie.overview; }
    return (
      <View style={styles.container}>
        <Image style={styles.image}
          source={{uri: `https://image.tmdb.org/t/p/w342${movie.backdrop_path}`}}
        />
        <Text style={styles.titleText}> { movie.title } </Text>
        <View style={{flex: 1, flexDirection: 'row', width: '100%', height: 30, justifyContent: 'space-around', alignItems: 'center'}}>
          <Text style={styles.mediumText}> <Icon name="ios-flame" size={18} color="#FF5F49"/> { movie.vote_average.toFixed(1) } </Text>
          <Text style={styles.mediumText}> <Icon name="ios-pulse" size={18} color="#1EFF37"/> { movie.popularity.toFixed(1) } </Text>
          <Text style={styles.mediumText}> <Icon name="ios-time" size={18} color="#0F3CFF"/> { movie.release_date } </Text>
        </View>
        <Text style={styles.baseText}> { overview } </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: '9%',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#d5d7e0',
    overflow: 'hidden'
  },
  image: {
    width: 342, 
    height: 192, 
  },
  titleText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
  },
  mediumText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  baseText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'justify',
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
  },
});