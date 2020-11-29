import React from "react";
import { Text, View } from "react-native";
import Svg from "react-native-svg";
import { connect } from "react-redux";
import bg from "../../../styles/ScreenStyle";
import SvgBrioHome from "../../../svg_assets/SvgBrioHome";

export const DashboardHome = (props) => {
  const { allBlockers } = props;

  return (
    <>
      <View style={bg.basic}>
        <SvgBrioHome style={{width: 500, height: 500}}/>
      </View>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    allBlockers: state.blockersState.blockers,
  };
};

export default connect(mapStateToProps)(DashboardHome);
