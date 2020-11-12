// REACT, REACT NATIVE //
import React, { useState, useRef } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { connect } from "react-redux";
import * as actions from "../rdx/actions";
import { useNavigation } from "@react-navigation/native";
// STYLES //
import { TextInput } from "react-native-paper";
import text from "../styles/TextStyle.js";
import bg from "../styles/ScreenStyle.js";
import input from "../styles/TextInputStyle.js";
import login from "../styles/LoginButtonStyle.js";
import brio from "../../assets/Brio_Star.png";

const LoginPage = (props) => {
  const navigation = useNavigation();
  const logInWatcher = props.logInWatcher;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const inputEmail = useRef(null);
  const inputPassword = useRef(null);

  const logIn = () => {
    //navigation.navigate('Dash')
    logInWatcher({
      email: email,
      password: password,
    });
  };
  return (
    <>
      <View style={bg.brick}>
        <Text style={text.header}>Hello, friend...</Text>
        <View>
          <Image source={brio} />
        </View>
        <TextInput
          label="Email..."
          mode="flat"
          underlineColor="black"
          style={input.container}
          ref={inputEmail}
          returnKeyType="next"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
          onSubmitEditing={() => inputPassword.current.focus()}
        ></TextInput>
        <TextInput
          label="Password..."
          mode="flat"
          style={input.container}
          underlineColor="black"
          ref={inputPassword}
          returnKeyType="next"
          autoCapitalize="none"
          value={password}
          onChangeText={setPassword}
          onSubmitEditing={() => inputConfirmPassword.current.focus()}
        ></TextInput>

        <TouchableOpacity style={login.container} onPress={() => logIn()}>
          <Text>Login</Text>
        </TouchableOpacity>

        <Text onPress={() => navigation.navigate("Signup")} style={text.text}>
          Sign up for an account?
        </Text>
        <Text onPress={() => navigation.navigate("Forgot")} style={text.text}>
          Forgot password?
        </Text>
      </View>
    </>
  );
};
const mapStateToProps = () => {
  return {};
};
const LoginPageConnected = connect(mapStateToProps, actions)(LoginPage);
export default LoginPageConnected;
