import React, { Component, useState, useEffect } from "react";
import { View, Animated, Easing } from "react-native";
import SvgBrioSpin from "../../svg_assets/SvgBrioSpin";

const SpinningBrio = () => {
  const [spinAnim] = useState(new Animated.Value(0));

  const interpolateRotation = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const animatedStyle = {
    transform: [
      { translateX: -130 },
      { translateY: -60 },
      { rotate: interpolateRotation },
      { translateX: 0 },
      { translateY: 0 },
    ],
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
        <SvgBrioSpin />
      </Animated.View>
    </View>
  );
};

export default SpinningBrio;