import React from "react";
import { View, Animated, TouchableHighlight } from "react-native";
import { connect } from "react-redux";
import SvgBrioBack from "../../../svg_assets/SvgBrioBack";

export const AnimatedBrio = () => {
  const moveAnimation = new Animated.ValueXY({ x: 0, y: 0 });
  const moveBrio = () => {
    Animated.spring(moveAnimation, {
      toValue: { x: 300, y: -900 },
    }).start();
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#ecf0f1", zIndex: 1 }}>
      <Animated.View
        style={[
          {
            width: 0,
            height: 0,
          },
          moveAnimation.getLayout(),
        ]}
      >
        <TouchableHighlight
          style={{
            paddingTop: 24,
            paddingBottom: 24,
          }}
          onPress={moveBrio}
        >
          <SvgBrioBack />
        </TouchableHighlight>
      </Animated.View>
    </View>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(AnimatedBrio);
