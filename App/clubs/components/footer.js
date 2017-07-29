import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from '../../style.js'

class Footer extends React.Component {
  render() {
    return (
      <View style={styles.footer}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/icons/calender.png')}
            style={styles.imageThumb}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../assets/icons/user.png')}
              style={styles.imageThumb}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../assets/icons/receipt.png')}
                style={styles.imageThumb}
                ></Image>
              </TouchableOpacity>
            </View>
          )
        }
      }

      export default Footer
