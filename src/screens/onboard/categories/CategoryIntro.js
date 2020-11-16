import React from "react";
import { View, Text, Image } from "react-native";
import text from "../../../styles/TextStyle.js";
import bg from "../../../styles/ScreenStyle.js";
import brio from "../../../../assets/Brio_Star.png";

function CategoryIntro() {
  return (
    <View style={bg.citrus}>
      <View>
        <Image source={brio} />
      </View>
      <View>
        <Text style={text.text}>
          To get started on anything, you sometimes need a few categories to
          generate ideas.
        </Text>
      </View>
      <View>
        <Text style={text.text}>Let’s see things we can focus on now...</Text>
      </View>
    </View>
  );
}

export default CategoryIntro;
