import React from 'react';
import { Text, View, Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import bg from "../styles/ScreenStyle.js";
import text from "../styles/TextStyle.js";
import input from "../styles/TextInputStyle.js";
import login from "../styles/LoginButtonStyle.js";

function SignupPage({ navigation }) {
    return (
        <View style={bg.sun}>
            <Text style={text.header}>Create Account</Text>
                <TextInput
                    label="Email..."
                    mode="flat"
                    underlineColor="black"
                    style={input.container}
                >
                </TextInput>

                <TextInput
                    label="Password..."
                    mode="flat"
                    style={input.container}
                    underlineColor="black"
                    >   
                </TextInput>

                <TextInput
                    label="Confirm Password..."
                    mode="flat"
                    style={input.container}
                    underlineColor="black"
                    >   
                </TextInput>

            <TouchableOpacity
                style={login.container}
                onPress={() => navigation.navigate('Token')}
            >
                <Text>
                    Sign-Up
                </Text>
            </TouchableOpacity>
        </View>
    )
}
export default SignupPage
