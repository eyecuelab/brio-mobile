import React from 'react';
import { Text, View, Image } from "react-native";
import bg from "../styles/ScreenStyle.js";
import text from "../styles/TextStyle.js";

function ForgotPassword() {
    return (
        <View style={bg.container}>
                <Text style={text.header}>Forgotten Password</Text>
        </View>
    )
}
export default ForgotPassword
