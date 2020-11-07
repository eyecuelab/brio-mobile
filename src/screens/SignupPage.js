import React, { useState, useRef } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import bg from "../styles/ScreenStyle.js";
import text from "../styles/TextStyle.js";
import input from "../styles/TextInputStyle.js";
import login from "../styles/LoginButtonStyle.js";

function SignupPage({ navigation }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const inputEmail = useRef(null);
  const inputUsername = useRef(null);
  const inputPassword = useRef(null);
  const inputConfirmPassword = useRef(null);

  return (
    <View style={bg.sun}>
      <Text style={text.header}>Create Account</Text>
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
        label="Username..."
        mode="flat"
        underlineColor="black"
        style={input.container}
        ref={inputUsername}
        returnKeyType="next"
        autoCapitalize="none"
        value={username}
        onChangeText={setUsername}
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

      <TextInput
        label="Confirm Password..."
        mode="flat"
        style={input.container}
        underlineColor="black"
        ref={inputConfirmPassword}
        returnKeyType="next"
        autoCapitalize="none"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <TouchableOpacity
        style={login.container}
        onPress={() => navigation.navigate("Token")}
      >
        <Text>Sign-Up</Text>
      </TouchableOpacity>
    </View>
  );
}
  
export default SignupPage;
