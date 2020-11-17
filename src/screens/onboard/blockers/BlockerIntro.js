import React from "react";
import { View, Text, Image } from "react-native";
import text from "../../../styles/TextStyle.js";
import bg from "../../../styles/ScreenStyle.js";
import brio from "../../../../assets/Brio_Star.png";

function BlockerIntro() {
  return (
    <View style={bg.grape}>
      <View>
        <Image source={brio} />
      </View>
      <View>
        <Text style={text.text}>
        New ideas are exciting, but we know that often times we never get started because things get in our way. We call these blockers.
        </Text>
      </View>
      <View>
        <Text style={text.text}>
        Let’s look at some blockers you might have...
        </Text>
      </View>
    </View>
  );
}

export default BlockerIntro;
