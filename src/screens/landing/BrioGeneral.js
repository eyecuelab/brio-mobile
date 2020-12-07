import React from 'react';
import { Text, View } from "react-native";
import bg from "../../styles/ScreenStyle.js";
import text from "../../styles/TextStyle.js";
import SvgBrioIntro from "../../svg_assets/SvgBrioIntro"


function BrioGeneral() {
    return (
        <View style={bg.grape}>
                <SvgBrioIntro />
        </View>
    )
}
export default BrioGeneral