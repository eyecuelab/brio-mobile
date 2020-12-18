import React, { Component, useState, useEffect } from "react";
import { View, Animated, Easing } from "react-native";
import SvgBrioIntro from "../../svg_assets/landing/SvgBrioIntro";

const BouncingBrio = () => {
  const [spinAnim] = useState(new Animated.Value(0));

  const interpolateRotation = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const animatedStyle = {
    transform: [{ rotate: interpolateRotation }],
  };

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinAnim, {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  });

  return (
    <View>
      <Animated.View style={animatedStyle}>
        <SvgBrioIntro />
      </Animated.View>
    </View>
  );
};

export default BouncingBrio;
