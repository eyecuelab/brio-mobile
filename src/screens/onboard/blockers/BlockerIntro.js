// REACT, REACT NATIVE //
import React, { useState, useRef, useEffect } from "react";
import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { connect } from "react-redux";
import * as actions from "../../rdx/actions/";
import { useNavigation } from "@react-navigation/native";
// STYLES //
import text from "../../styles/TextStyle.js";
import bg from "../../styles/ScreenStyle.js";
import brio from "../../../assets/Brio_Star.png";


function BlockerIntro() {
    return (
      <View style={bg.berry}>
        <View>
          <Image source={brio} />
        </View>
        <View>
          <Text style={text.text}>
          New ideas are exciting, but we know that often times we never get started because things get in our way. We call these blockers.
          </Text>
        </View>
        <View>
          <Text style={text.text}>Let’s look at some blockers you might face...</Text>
        </View>
      </View>
    );
  }
  
  export default BlockerIntro;
  