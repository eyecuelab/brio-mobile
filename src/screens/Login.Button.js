import React, { Component } from 'react';
import { TouchableOpacity, Text, View} from 'react-native';
import styles from '../screens/Login.Button.Style.js';

const LoginButton = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Dash')}>
          <Text style={styles.buttonText}> LOGIN </Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default LoginButton;