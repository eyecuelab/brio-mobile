import React from 'react';
import { Text, View, Image } from "react-native";
import bg from "../styles/ScreenStyle.js";
import text from "../styles/TextStyle.js";
import brio from "../../assets/Brio_Star.png";
import music from "../../assets/Music_Progress.png";
import convo from "../../assets/Convo_Progress.png";
import exercise from "../../assets/Exercise_Progress.png";

function DashboardPage() {
    return (
        <>
        <View style={bg.container}>
            <Text style={text.header}>Dash</Text>
            <View>
                <Image source={brio} />
            </View>
            <View>
                <Image source={music} />
            </View>
            <br />
            <View>
                <Image source={convo} />
            </View>
            <br />
            <View>
                <Image source={exercise} />
            </View>
        </View>
        </>
    )
}
export default DashboardPage
