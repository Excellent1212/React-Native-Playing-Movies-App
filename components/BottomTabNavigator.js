import React from 'react';
import { Text, Image } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import NowPlayingScreen from './NowPlayingScreen';
import TopRatedScreen from './TopRatedScreen';
import DetailsScreen from './DetailsScreen';
import { NowPlayingIcon, TopRatedIcon } from './Icons';
import AppInfoModal from './AppInfoModal';

const NowPlayingStack = createStackNavigator(
  {
    NowPlaying: { 
      screen: NowPlayingScreen,
      navigationOptions: { 
        title: 'Now Playing Movies',
        headerLeft: ( <Image style={{height: 38, width: 50}} source={require('../assets/oms-logo.png')}/> ),
        headerTitle: ( <Text style={{color:'#e50914', fontSize: 20, fontWeight: 'bold'}}>Now Playing Movies</Text> ),
        headerRight: ( <AppInfoModal/> ),
      },
    },
    Details: { 
      screen: DetailsScreen,
      navigationOptions: 
        ({navigation}) => { 
          return { 
            headerTitle: navigation.getParam('movie').title }; 
        }
    }
  },
  {
    initialRouteName: 'NowPlaying'
  },
);

const TopRatedStack = createStackNavigator(
  {
    TopRated: { 
      screen: TopRatedScreen,
      navigationOptions: { 
        title: 'Top Rated Movies',
        headerLeft: ( <Image style={{height: 38, width: 50,}} source={require('../assets/oms-logo.png')}/> ),
        headerTitle: ( <Text style={{color:'#e50914', fontSize: 20, fontWeight: 'bold'}}>Top Rated Movies</Text> ),
        headerRight: ( <AppInfoModal/> ),
      },
    },
    Details: { 
      screen: DetailsScreen,
      navigationOptions: 
        ({navigation}) => { 
          return { 
            headerTitle: navigation.getParam('movie').title }; 
        }
    }
  },
  {
    initialRouteName: 'TopRated'
  },
);

export default createBottomTabNavigator(
  {
    NowPlaying: {
      screen: NowPlayingStack,
      path: '/nowplaying',
      navigationOptions: ({screenProps}) => {
        return {
          tabBarLabel: 'Now Playing',
          tabBarIcon: NowPlayingIcon,
          tabBarOnPress: ({defaultHandler}) => {
            screenProps.handleRefresh('now_playing');
            defaultHandler();
          }
        };
      },
    },
    TopRated: {
      screen: TopRatedStack,
      path: '/toprated',
      navigationOptions: ({screenProps}) => { 
        return { 
          tabBarLabel: 'Top Rated',
          tabBarIcon: TopRatedIcon,
          tabBarOnPress: ({defaultHandler}) => {
            screenProps.handleRefresh('top_rated');
            defaultHandler();
          }
        };
      }
    },
    /* Other configuration remains unchanged */
  },
);

