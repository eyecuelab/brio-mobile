import React from "react";
import LoginButton from "./Login.Button.js";
import { Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import styles from "./Login.Button.Style.js";
import text from "./Text.Style.js";
import bg from "./Screen.Style.js"
import input from "./TextInput.Style.js";


export const LoginPage = () => {
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

        <LoginButton />

        <Text style={text.text}>Sign up for an account?</Text>
        <Text style={text.text}>Forgot password?</Text>
      </View>
    </>
  );
};

export default LoginPage;
