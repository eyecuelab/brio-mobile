import React from 'react';
import { Text, View } from "react-native";
import bg from "../styles/ScreenStyle.js";
import text from "../styles/TextStyle.js";

function DashboardPage() {
    return (
        <View style={bg.container}>
            <Text style={text.header}>Dashboard</Text>
        </View>
    )
}
export default DashboardPage
