import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import bg from "../styles/ScreenStyle.js";
import text from "../styles/TextStyle.js";
import input from "../styles/TextInputStyle.js";
import login from "../styles/LoginButtonStyle.js";
import { connect } from "react-redux";

function TokenAuth({ navigation }) {
    const [token, setToken] = useState("");
    const confirmUserWatcher = props.confirmUserWatcher;

    //navigation.navigate('Dash')
    const confirmUser = () => {
        confirmUserWatcher({
            token: token,
        })
    }
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
                    onPress={() => {confirmUser()} }
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

TokenAuth = connect(actions)(TokenAuth);
export default TokenAuth
