import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import text from "../styles/TextStyle.js";
import bg from "../styles/ScreenStyle.js";
import input from "../styles/TextInputStyle.js";
import login from "../styles/LoginButtonStyle.js"

export const LoginPage = ({ navigation }) => {

  const navigate = () => {
    return navigation.navigate('Dash');
  }

  return (
    <>
      <View style={bg.container}>
        <Text style={text.header}>Hello, friend...</Text>
        <TextInput
          label="Email..."
          mode="flat"
          underlineColor="black"
          style={input.container}
        ></TextInput>
        <TextInput
          label="Password..."
          mode="flat"
          style={input.container}
          underlineColor="black"
        ></TextInput>

        <TouchableOpacity
          style={login.container}
          onPress={() => navigate()}
        >
          <Text>
            Login
          </Text>
        </TouchableOpacity>
        
        <Text style={text.text}>Sign up for an account?</Text>
        <Text style={text.text}>Forgot password?</Text>
      </View>
    </>
  );
};

export default LoginPage;
