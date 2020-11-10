import React, { useState, useRef } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import bg from "../styles/ScreenStyle.js";
import text from "../styles/TextStyle.js";
import input from "../styles/TextInputStyle.js";
import login from "../styles/LoginButtonStyle.js";
import { connect } from "react-redux";
import * as actions from "../rdx/actions";

function SignupPage(props, { navigation }) {
  const signUpWatcher = props.signUpWatcher;
  const users = props.users;

  const [last_name, setLast_Name] = useState("");
  const [first_name, setFirst_Name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [confirmPassword, setConfirmPassword] = useState("");

  const inputFirst_Name = useRef(null);
  const inputLast_Name = useRef(null);
  const inputEmail = useRef(null);
  const inputPassword = useRef(null);
  //const inputConfirmPassword = useRef(null);

  const signUp = () => {
    signUpWatcher({
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
      // confirmPassword: confirmPassword,
    });
    //navigation.navigate("Token");
  };

  return (
    <>
      <View style={bg.sun}>
        <Text style={text.header}>Create Account</Text>
        <TextInput
          label="First name..."
          mode="flat"
          underlineColor="black"
          style={input.container}
          ref={inputFirst_Name}
          returnKeyType="next"
          autoCapitalize="none"
          value={first_name}
          onChangeText={setFirst_Name}
          onSubmitEditing={() => inputFirst_Name.current.focus()}
        />

        <TextInput
          label="Last name..."
          mode="flat"
          underlineColor="black"
          style={input.container}
          ref={inputLast_Name}
          returnKeyType="next"
          autoCapitalize="none"
          value={last_name}
          onChangeText={setLast_Name}
          onSubmitEditing={() => inputLast_Name.current.focus()}
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
          onSubmitEditing={() => inputUsername.current.focus()}
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
    users: state.users,
  };
};

SignupPage = connect(mapStateToProps, actions)(SignupPage);
export default SignupPage;
