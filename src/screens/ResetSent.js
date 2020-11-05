import React from 'react';
import { Text, View, Image } from "react-native";
import bg from "../styles/ScreenStyle.js";
import text from "../styles/TextStyle.js";

function ResetSent() {
    return (
        <View style={bg.container}>
                <Text style={text.header}>Password Reset Sent</Text>
        </View>
    )
}
export default ResetSent
