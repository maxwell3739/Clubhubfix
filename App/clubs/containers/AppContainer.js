import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Swiper from 'react-native-swiper';
import Calender from '../components/clubFeatures/calender'
import ClubProfile from '../components/clubFeatures/clubProfile'
import Receipt from '../components/clubFeatures/receipt'
import Footer from '../components/footer'
import styles from '../../style.js'
import { TabNavigator } from 'react-navigation';

import { Tabs, Tab, Icon } from 'react-native-elements'

class AppContainer extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {backgroundColor: "#ee593b"}
  });
  constructor() {
    super()
    this.state = {
      selectedTab: 'profile',
    }
  }
  changeTab (selectedTab) {
    this.setState({selectedTab})
  }
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.header}></View>
        <Tabs>
          <Tab>
          </Tab>
          <Tab>
          </Tab>
        </Tabs>
      </View>
    )
  }
}

export default TabNavigator({
  Calender: {screen: Calender},
  ClubProfile: {screen: ClubProfile},
  Receipt: {screen: Receipt},
},
{
  initialRouteName: 'ClubProfile',
  swipeEnabled: true,
  animationEnabled: true,
  tabBarOptions: {
      activeTintColor: '#f5c151',
      style: {
        backgroundColor: '#ee593b',
      },
  }
});
