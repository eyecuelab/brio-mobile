// REACT, REACT NATIVE //
import React, { useState, useRef, useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import * as actions from "../../rdx/actions";
import { useNavigation } from "@react-navigation/native";
// STYLES //
import { TextInput } from "react-native-paper";
import bg from "../../styles/ScreenStyle.js";
import text from "../../styles/TextStyle.js";
import input from "../../styles/TextInputStyle.js";
import login from "../../styles/LoginButtonStyle.js";

const SignupPage = (props) => {
  const navigation = useNavigation();
  const { signUpWatcher, user } = props;
  const errorMessage = user.errorMessage;

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [confirmPassword, setConfirmPassword] = useState("");

  const inputUsername = useRef(null);
  const inputEmail = useRef(null);
  const inputPassword = useRef(null);
  //const inputConfirmPassword = useRef(null);

  const signUp = () => {
    signUpWatcher({
      username: username,
      email: email,
      password: password,
      // confirmPassword: confirmPassword,
    });
  };

  useEffect(() => {
    if (user.status == "Signed up") {
      navigation.navigate("Token");
    }
    return () => {};
  }, [user.status]);

  return (
    <>
      <View style={bg.sun}>
        <Text style={text.header}>Account Signup</Text>
        {errorMessage !== null ? (
          <View>
            <Text style={text.text}>Login Error: {errorMessage}</Text>
            <Text
              onPress={() => navigation.navigate("Forgot")}
              style={text.text}
            >
              Forgot password?
            </Text>
          </View>
        ) : null}
        <TextInput
          label="Username..."
          mode="flat"
          underlineColor="black"
          style={input.container}
          ref={inputUsername}
          returnKeyType="next"
          autoCapitalize="none"
          value={username}
          onChangeText={setUsername}
          onSubmitEditing={() => inputUsername.current.focus()}
        />

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
          onSubmitEditing={() => inputEmail.current.focus()}
        />

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
          onSubmitEditing={() => inputPassword.current.focus()}
        />

        {/* <TextInput
        label="Confirm Password..."
        mode="flat"
        style={input.container}
        underlineColor="black"
        ref={inputConfirmPassword}
        returnKeyType="next"
        autoCapitalize="none"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      /> */}

        <TouchableOpacity style={login.container} onPress={() => signUp()}>
          <Text>Sign-Up</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const SignupPageConnected = connect(mapStateToProps, actions)(SignupPage);
export default SignupPageConnected;
