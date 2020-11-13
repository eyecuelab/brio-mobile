import React from "react";
import { View, Text, Image } from "react-native";
import text from "../../../styles/TextStyle.js";
import bg from "../../../styles/ScreenStyle.js";
import brio from "../../../../assets/Brio_Star.png";

function CategoryList() {
  return (
    <View style={bg.lime}>
      <View>
        <Image source={brio} />
      </View>
      <View>
        <Text style={text.text}>
          Here's a few categories we can generate ideas from to stay motivated:
        </Text>
      </View>
      <View>
      </View>
        <Text style={text.text}>
         Conversation
        </Text>
        <Text style={text.text}>
         Music
        </Text>
        <Text style={text.text}>
         Exercise
        </Text>
    </View>
  );
}

export default CategoryList;
