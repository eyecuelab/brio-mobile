import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { TextInput } from "react-native-paper";
import text from "../styles/TextStyle.js";
import bg from "../styles/ScreenStyle.js";
import input from "../styles/TextInputStyle.js";
import login from "../styles/LoginButtonStyle.js"
import brio from "../../assets/Brio_Star.png";

export const LoginPage = ({ navigation }) => {
  return (
    <>
      <View style={bg.container}>
        <Text style={text.header}>Hello, friend...</Text>
        <View>
               <Image source={brio} />
        </View>
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
          onPress={() => navigation.navigate('Dash')}
        >
          <Text>
            Login
          </Text>
        </TouchableOpacity>
        
        <Text 
          onPress={() => navigation.navigate('Signup')}
          style={text.text}
        >
            Sign up for an account?
        </Text>
        <Text
          onPress={() => navigation.navigate('Forgot')}
          style={text.text}
        >
          Forgot password?
        </Text>
      </View>
    </>
  );
};

export default LoginPage;
