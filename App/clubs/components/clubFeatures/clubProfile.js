import React from 'react';
import { connect } from 'react-redux';

import {
  AsyncStorage,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  ListView,
  Alert,
  Image,
} from 'react-native';
import styles from '../../../style.js'
import { StackNavigator } from 'react-navigation';
import Footer from '../footer';
import { makeuser } from '../../../actions/index';
import { Card, ListItem, Button, Text } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons'

const users = [
 {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 },
]

class ClubProfile extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {backgroundColor: "#ee593b"},
    title: "Club Profile",
    tabBarIcon: <Icon name="ios-person" size={30} color="#f5c151" />
  });
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.center}>
          <Text h1>{this.props.user.clubName}</Text>
        </View>
      </View>
    )
  }
}

function mapStateToProps(state) { //filters store.getState into a usable format
  return {
    user: state //array of users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    makeuser: (data) => {
      dispatch(makeuser(data)); //carries object to the reducer based on the CASE
    },
  };
}

ClubProfile = connect( //connect integrates redux
  mapStateToProps,
  mapDispatchToProps
)(ClubProfile);

export default ClubProfile
