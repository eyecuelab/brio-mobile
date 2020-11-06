import React from 'react';
import { Text, View, Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import bg from "../styles/ScreenStyle.js";
import text from "../styles/TextStyle.js";
import input from "../styles/TextInputStyle.js";
import login from "../styles/LoginButtonStyle.js";

function TokenAuth({ navigation }) {
    return (
        <View style={bg.mint}>
                <Text style={text.header}>Please Enter Token</Text>
                <TextInput
                    label="Enter token..."
                    mode="flat"
                    style={input.container}
                    underlineColor="black"
                ></TextInput>

                <TouchableOpacity
                    style={login.container}
                    onPress={() => navigation.navigate('Dash')}
                >
                    <Text>
                        Confirm
                    </Text>
                </TouchableOpacity>
                <Text
                    style={text.text}
                    onPress={() => navigation.navigate('Token')}
                >
                    Resend Token
                </Text>
        </View>
    )
}
export default TokenAuth
