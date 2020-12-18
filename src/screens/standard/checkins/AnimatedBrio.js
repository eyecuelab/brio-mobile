import React, { useState, useEffect } from "react";
import { View, Animated } from "react-native";
import { connect } from "react-redux";
import SvgBrioBack from "../../../svg_assets/SvgBrioBack";
import * as actions from "../../../rdx/actions";

export const AnimatedBrio = (props) => {
  const { doAnimation, dispatch } = props;
  const [animationSets, setAnimationSets] = useState({
    startPoint: { x: -150, y: 150 },
    endPoint: { x: 400, y: -500 },
    duration: 1500,
  });
  useEffect(() => {
    if (doAnimation) {
      moveBrio();
    }
    return () => {};
  }, [doAnimation]);

  const animationData = [
    {
      startPoint: { x: -150, y: 150 },
      endPoint: { x: 400, y: -500 },
      duration: 1500,
    },
    {
      startPoint: { x: 450, y: 150 },
      endPoint: { x: -400, y: -500 },
      duration: 1500,
    },
  ];
  const randomAnimationData = () => {
    let randomIndex = Math.floor(Math.random() * animationData.length);
    setAnimationSets(animationData[randomIndex]);
  };

  const moveAnimation = new Animated.ValueXY(animationSets.startPoint);
  const moveBrio = () => {
    Animated.timing(moveAnimation, {
      toValue: animationSets.endPoint,
      duration: animationSets.duration,
      useNativeDriver: false,
    }).start(() => {
      const action = actions.resetAnimation();
      dispatch(action);
      randomAnimationData();
    });
  };

  if (!doAnimation) {
    return null;
  }

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
        <SvgBrioBack />
      </Animated.View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    doAnimation: state.blockersState.doAnimation,
  };
};

export default connect(mapStateToProps)(AnimatedBrio);
