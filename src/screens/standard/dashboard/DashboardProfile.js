import React from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import bg from "../../../styles/ScreenStyle";
import SvgAvatar from "../../../svg_assets/SvgAvatar";

export const DashboardProfile = () => {
  return (
    <>
      <View style={bg.basic}>
       <SvgAvatar />
      </View>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardProfile);
