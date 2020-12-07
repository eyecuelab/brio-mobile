import React from 'react';
import { Text, View } from "react-native";
import bg from "../../styles/ScreenStyle.js";
import text from "../../styles/TextStyle.js";
import SvgLetsDoThis from "../../svg_assets/SvgLetsDoThis"


function BrioSuccess() {
    return (
        <View style={bg.basic}>
                <SvgLetsDoThis />
        </View>
    )
}
export default BrioSuccess