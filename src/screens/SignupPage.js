import React, { useState, useRef, useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import bg from "../styles/ScreenStyle.js";
import text from "../styles/TextStyle.js";
import input from "../styles/TextInputStyle.js";
import login from "../styles/LoginButtonStyle.js";
import { connect } from "react-redux";
import * as actions from "../rdx/actions";
import { useNavigation } from "@react-navigation/native";

function SignupPage(props) {
  const navigation = useNavigation();
  const signUpWatcher = props.signUpWatcher;
  const user = props.user;

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [confirmPassword, setConfirmPassword] = useState("");

  const inputUsername = useRef(null);
  const inputEmail = useRef(null);
  const inputPassword = useRef(null);
  //const inputConfirmPassword = useRef(null);

  useEffect(() => {
    if (user.status == "Signed up") {
      navigation.navigate("Token");
    }
    return () => {};
  }, [user.status]);

  const signUp = () => {
    signUpWatcher({
      username: username,
      email: email,
      password: password,
      // confirmPassword: confirmPassword,
    });
  };

  return (
    <>
      <View style={bg.sun}>
        <Text style={text.header}>Account Signup</Text>
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
          onSubmitEditing={() => inputEmail.current.focus()}
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
          onSubmitEditing={() => inputPassword.current.focus()}
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
          onSubmitEditing={() => inputConfirmPassword.current.focus()}
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
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

SignupPage = connect(mapStateToProps, actions)(SignupPage);
export default SignupPage;
