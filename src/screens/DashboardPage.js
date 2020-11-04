import React from 'react'
import { Text, View } from "react-native";
import bg from "./Screen.Style.js"
import text from "./Text.Style.js";

function DashboardPage() {
    return (
        <View style={bg.container}>
            <Text style={text.header}>Dashboard</Text>
        </View>
    )
}
export default DashboardPage
