import React from "react";
import LoginButton from "./Login.Button.js";
import { Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import styles from "./Login.Button.Style.js";
import text from "./Text.Style.js";
import bg from "./Screen.Style.js"

export const LoginPage = () => {
  return (
    <>
      <View style={bg.container}>
        <Text style={text.header}>Hello, friend...</Text>
        <TextInput
          label="Email..."
          style={styles.input}
          mode="flat"
          underlineColor="white"
        ></TextInput>
        <TextInput
          label="Password..."
          style={styles.input}
          mode="flat"
          underlineColor="white"
        ></TextInput>

        <LoginButton />

        <Text style={text.text}>Sign up for an account?</Text>
        <Text style={text.text}>Forgot password?</Text>
      </View>
    </>
  );
};

export default LoginPage;
