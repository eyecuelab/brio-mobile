import React from 'react';
import { Text, View } from "react-native";
import bg from "../../styles/ScreenStyle.js";
import text from "../../styles/TextStyle.js";

function ExerciseCheck() {
    return (
        <View style={bg.brick}>
                <Text style={text.header}>Exercise Check-In</Text>
        </View>
    )
}
export default ExerciseCheck