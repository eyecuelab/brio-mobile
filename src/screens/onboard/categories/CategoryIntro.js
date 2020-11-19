// REACT, REACT NATIVE //
import React from "react";
import { View, Text, Image } from "react-native";
import { connect } from "react-redux";
// STYLES //
import text from "../../../styles/TextStyle.js";
import bg from "../../../styles/ScreenStyle.js";
import brio from "../../../../assets/Brio_Star.png";
import sArrow from "../../../../assets/Swipe_Arrow.png";
import arrow from "../../../styles/ArrowStyle.js"
import styled from "styled-components/native";

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
      <View style={arrow.bottom}>
        <Text style={text.text}>Swipe to Continue</Text>
        <Image source={sArrow} />
      </View>
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}
const CategoryIntroConnected = connect(mapStateToProps)(CategoryIntro)
export default CategoryIntroConnected;
