import React from 'react';
import {
  AsyncStorage,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ListView,
  Alert,
  Button,
  Image,
} from 'react-native';
import styles from '../../../style.js'
import { StackNavigator } from 'react-navigation';
import Footer from '../footer';
import Icon from 'react-native-vector-icons/Ionicons'

class Calender extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {backgroundColor: "#ee593b"},
    title: "Calender",
    tabBarIcon: <Icon name="md-calendar" size={30} color="#f5c151" />
  });
  render() {
    return (
        <View style={styles.center}>
          <Image
            source={require('../../../assets/icons/ch_logo.png')}
            style={styles.imageSmall}
          ></Image>
            <Text> Calender </Text>
        </View>
    )
  }
}

export default Calender
