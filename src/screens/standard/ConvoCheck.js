import React from 'react';
import { Text, View } from "react-native";
import bg from "../../styles/ScreenStyle.js";
import text from "../../styles/TextStyle.js";
import brio from "../../assets/Brio_Star.png";

function ConvoCheck() {
    return (
        <View style={bg.grape}>
                <Text style={text.header}>Exercise Check-In</Text>
                <Image source={brio} />
        </View>
    )
}
export default ConvoCheck