import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import bg from "../../styles/ScreenStyle.js";
import text from "../../styles/TextStyle.js";
import input from "../../styles/TextInputStyle.js";
import login from "../../styles/LoginButtonStyle.js";
import { connect } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import * as actions from "../../rdx/actions";

function TokenAuth(props) {
  const navigation = useNavigation();
  const confirmUserWatcher = props.confirmUserWatcher;
  const user = props.user;

  const [token, setToken] = useState("");

  useEffect(() => {
    if (user.confirmationMessage == "User Confirmed") {
      navigation.navigate("Dash");
    }
    return () => {};
  }, [user.confirmationMessage]);

  const confirmUser = () => {
    confirmUserWatcher({
      code: token,
    });
  };

  return (
    <View style={bg.mint}>
      <Text style={text.header}>Please Enter Token</Text>
      <TextInput
        label="Enter token..."
        mode="flat"
        style={input.container}
        underlineColor="black"
        autoCapitalize="none"
        onChangeText={setToken}
      ></TextInput>

      <TouchableOpacity
        style={login.container}
        onPress={() => {
          confirmUser();
        }}
      >
        <Text>Confirm</Text>
      </TouchableOpacity>
      <Text style={text.text} onPress={() => navigation.navigate("Token")}>
        Resend Token
      </Text>
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

TokenAuth = connect(mapStateToProps, actions)(TokenAuth);
export default TokenAuth;
