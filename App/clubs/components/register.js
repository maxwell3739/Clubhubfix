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
  Button,
  Image,
} from 'react-native';
import styles from '../../style.js'
import { makeuser } from '../../actions/index';

class RegisterClub extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {backgroundColor: "#ee593b"}
  });
  constructor() {
    super();
    this.state={
      clubName: '',
      password: ''
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.center}>
          <Image
            source={require('../../assets/icons/ch_logo.png')}
            style={styles.imageSmall}
            ></Image>
            <TextInput
              style={styles.inputField}
              placeholder='Club Name'
              onChangeText={(text) => this.setState({clubName: text})}
              value={this.state.username}
              >
              </TextInput>
              <TextInput
                style={styles.inputField}
                placeholder='Password'
                onChangeText={(text) => this.setState({password: text})}
                value={this.state.password}
                secureTextEntry={true}
                message=''
                >
                </TextInput>
                <TouchableOpacity
                  style={[styles.button, styles.buttonGreen]}
                  onPress={() => {
                    console.log(this.state)
                    fetch('https://ef76ab26.ngrok.io/api/users/registerclub', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json'
                      },
                      body: JSON.stringify({
                        clubName: this.state.clubName,
                        password: this.state.password,
                      })
                    })
                    .then((response) => response.json())
                    .then((responseJson) => {
                      console.log('success', responseJson)
                      if (responseJson.success) {
                        //put the user in the store
                        this.props.makeuser(
                          { clubName: this.state.clubName,
                            password: this.state.password,
                          })
                          console.log(this.props.user)
                          this.props.navigation.navigate('RegistrationContainer')
                        }
                        else {
                          console.log('failure')
                          console.log(responseJson)
                        }
                      })
                      .catch((err) => {
                        console.log('error', err)
                      })
                    }}
                    >
                      <Text style={styles.buttonLabel}> Register </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.footer}>
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

          RegisterClub = connect( //connect integrates redux
            mapStateToProps,
            mapDispatchToProps
          )(RegisterClub);

          export default RegisterClub
