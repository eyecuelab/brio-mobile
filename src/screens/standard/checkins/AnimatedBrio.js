import React, { useEffect } from "react";
import { View, Animated } from "react-native";
import { connect } from "react-redux";
import SvgBrioBack from "../../../svg_assets/SvgBrioBack";
import * as actions from "../../../rdx/actions";

export const AnimatedBrio = (props) => {
  const { doAnimation, dispatch } = props;

  useEffect(() => {
    if (doAnimation) {
      moveBrio();
    }
    return () => {};
  }, [doAnimation]);

  const moveAnimation = new Animated.ValueXY({ x: -200, y: 150 });
  const moveBrio = () => {
    Animated.timing(moveAnimation, {
      toValue: { x: 400, y: -500 },
      duration: 1500,
      useNativeDriver: false,
    }).start(() => {
      const action = actions.resetAnimation();
      dispatch(action);
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
