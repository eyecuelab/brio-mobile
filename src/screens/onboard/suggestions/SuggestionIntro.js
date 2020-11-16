import React from "react";
import { View, Text, Image } from "react-native";
import text from "../../../styles/TextStyle.js";
import bg from "../../../styles/ScreenStyle.js";
import brio from "../../../../assets/Brio_Star.png";

function Category() {
  return (
    <View style={bg.citrus}>
      <View>
        <Image source={brio} />
      </View>
      <View>
        <Text style={text.text}>
          Now that we have a few catgegories to work with, here’s a few
          suggestions to get you started.
        </Text>
      </View>
      <View>
        <Text style={text.text}>
          Let’s check out a few suggestions to keep track of...
        </Text>
      </View>
    </View>
  );
}

export default Category;
