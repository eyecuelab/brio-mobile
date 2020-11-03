import React, { Component } from 'react';
import { TouchableOpacity, Text, View} from 'react-native';
import styles from '../screens/Login.Button.Style.js';

class LoginButton extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Text style={styles.buttonText}> LOGIN </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default LoginButton;