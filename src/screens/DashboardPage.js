import React from "react";
import { Text, View, Image } from "react-native";
import bg from "../styles/ScreenStyle.js";
import text from "../styles/TextStyle.js";
import brio from "../../assets/Brio_Star.png";
import music from "../../assets/Music_Progress.png";
import convo from "../../assets/Convo_Progress.png";
import exercise from "../../assets/Exercise_Progress.png";

function DashboardPage() {
  const progressBars = [music, convo, exercise];

  return (
    <>
      <View style={bg.robin}>
        <Text style={text.header}>Dash</Text>
        <View>
          <Image source={brio} />
        </View>
        {progressBars.map((bar) => {
          return (
            <View key= {bar} style={{ marginLeft: 15, marginBottom: 15 }}>
              <Image source={bar} />
            </View>
          );
        })}
      </View>
    </>
  );
}
export default DashboardPage;
