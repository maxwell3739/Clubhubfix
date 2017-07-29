import React from 'react';
import { connect } from 'react-redux';

import {
  AsyncStorage,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ListView,
  Alert,
  Image,
} from 'react-native';
import styles from '../../style.js'
import { StackNavigator } from 'react-navigation';
import { makeuser } from '../../actions/index';
import {
  Header,
  SocialIcon,
  List,
  ListItem,
  Button,
  Icon
} from 'react-native-elements'

import RegisterClub from '../components/register'
import LoginClub from '../components/login'
import AppContainer from './AppContainer'

class RegistrationContainer extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {backgroundColor: "#ee593b"}
  });
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.center}>
              <Image
                source={require('../../assets/icons/ch_logo.png')}
                style={styles.imageSmall}
                ></Image>
                <TouchableOpacity style={[styles.button, styles.buttonGreen]}
                  onPress={() => (this.props.navigation.navigate('AppContainer'))}>
                  <Text style={styles.buttonLabel}>Login as Club</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.buttonGreen]}>
                  <Text style={styles.buttonLabel}>Login as Student</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.buttonGreen]}
                  onPress={() => (this.props.navigation.navigate('RegisterClub'))}>
                  <Text style={styles.buttonLabel}>Register as Club</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button]}>
                  <Text style={styles.buttonLabel}>Register as Student</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.footer}>
              </View>
            </View>
          );
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

      RegistrationContainer = connect( //connect integrates redux
        mapStateToProps,
        mapDispatchToProps
      )(RegistrationContainer);


      export default StackNavigator({
        RegistrationContainer: {screen: RegistrationContainer},
        LoginClub: {screen: LoginClub},
        RegisterClub: {screen: RegisterClub},
        AppContainer: {screen: AppContainer},
      }, {initialRouteName: 'AppContainer'});
