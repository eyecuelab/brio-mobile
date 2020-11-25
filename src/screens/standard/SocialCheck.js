import React from 'react';
import { Text, View } from "react-native";
import bg from "../../styles/ScreenStyle.js";
import text from "../../styles/TextStyle.js";

function SocialCheck() {
    return (
        <View style={bg.grape}>
                <Text style={text.header}>Social Check-In</Text>
        </View>
    )
}
export default SocialCheck