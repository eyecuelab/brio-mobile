import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { TextInput } from "react-native-paper";
import bg from "../styles/ScreenStyle.js";
import text from "../styles/TextStyle.js";
import input from "../styles/TextInputStyle.js";
import login from "../styles/LoginButtonStyle.js";
import brio from "../../assets/Brio_Star.png";

function ForgotPassword({ navigation }) {
  return (
    <>
      <View style={bg.container}>
        <View>
          <Text style={text.header}>Forgotten Password</Text>
          <Image source={brio} />
        </View>

        <TextInput
          label="Email..."
          mode="flat"
          underlineColor="black"
          style={input.container}
        ></TextInput>
        <TouchableOpacity
          style={login.container}
          onPress={() => navigation.navigate("Reset")}
        >
          <Text>Send Password Reset</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
export default ForgotPassword;
