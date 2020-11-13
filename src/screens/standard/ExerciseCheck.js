import React from 'react';
import { Text, View } from "react-native";
import bg from "../../styles/ScreenStyle.js";
import text from "../../styles/TextStyle.js";
import brio from "../../assets/Brio_Star.png";

function ExcerciseCheck() {
    return (
        <View style={bg.brick}>
                <Text style={text.header}>Exercise Check-In</Text>
                <Image source={brio} />
        </View>
    )
}
export default ExcerciseCheck