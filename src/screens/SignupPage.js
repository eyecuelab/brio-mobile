import React from 'react';
import { Text, View, Image } from "react-native";
import bg from "../styles/ScreenStyle.js";
import text from "../styles/TextStyle.js";

function SignupPage() {
    return (
        <View style={bg.container}>
                <Text style={text.header}>Account Signup</Text>
        </View>
    )
}
export default SignupPage
