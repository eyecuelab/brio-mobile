import React from "react";
import { View, Text, Image } from "react-native";
import text from "../../../styles/TextStyle.js";
import bg from "../../../styles/ScreenStyle.js";
import brio from "../../../../assets/Brio_Star.png";
import { connect } from "react-redux";
import sArrow from "../../../../assets/Swipe_Arrow.png";
import arrow from "../../../styles/ArrowStyle.js";

function BlockerIntro() {
  return (
    <View style={bg.sun}>
      <View>
        <Image source={brio} style={{ marginTop: 100 }} />
      </View>
      <View>
        <Text style={text.text}>
          New ideas are exciting, but we know that often times we never get
          started because things get in our way. We call these blockers.
        </Text>
      </View>
      <View>
        <Text style={text.text}>
          Let’s look at some blockers you might have...
        </Text>
      </View>
      <View style={arrow.bottom}>
        <Image source={sArrow} />
      </View>
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    blockers: state,
  };
};
const BlockerIntroConnected = connect(mapStateToProps)(BlockerIntro);
export default BlockerIntroConnected;
