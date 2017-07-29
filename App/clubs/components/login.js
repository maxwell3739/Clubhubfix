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
import styles from '../../style.js'
import { StackNavigator } from 'react-navigation';
import { FormLabel, FormInput } from 'react-native-elements'

class LoginClub extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {backgroundColor: "#ee593b"}
  });
  constructor() {
    super();
    this.state={
      clubName: '',
      password: '',
      message: ''
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
            <FormLabel
              labelStyle={{color:'blue'}}
              >CLUB NAME</FormLabel>
            <FormInput
              onChangeText={(text) => this.setState({clubName: text})}
              containerStyle={{color:'blue'}}
            />
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
                  style={[styles.button]}
                  onPress={() => {
                    fetch('http://f8a47fa8.ngrok.io/api/users/registerclub', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json'
                      },
                      body: JSON.stringify({
                        username: this.state.clubName,
                        password: this.state.password,
                      })
                    })
                    .then((response) => response.json())
                    .then((responseJson) => {
                      if (responseJson.success) {
                        console.log('success')
                        this.props.makeuser(
                          { clubName: this.state.clubName,
                            password: this.state.password,
                            loggedIn: true
                          })
                        this.props.navigation.navigate('AppContainer')
                      }
                      else {
                        this.setState({message: responseJson.error})
                      }
                    })
                    .catch((err) => {
                      console.log('error', err)
                    })
                  }}
                  >
                    <Text style={styles.buttonLabel}> Login </Text>
                  </TouchableOpacity>
                  <Text style={styles.textSmall} >{this.state.message}</Text>
                </View>
                <View style={styles.footer}>
                </View>
              </View>
            )
          }
        }

        export default LoginClub
