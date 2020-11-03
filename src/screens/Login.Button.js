import React, { Component } from 'react';
import { Text, View} from 'react-native';
import styles from './Login.Button.Style.js';

class LoginButton extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.buttonText}> LOGIN </Text>
      </View>
    );
  }
}

export default LoginButton;