import React from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import text from "../../../styles/TextStyle";

export const DashboardProfile = () => {
  return (
    <>
      <View>
        <Text style={text.header}>Hello</Text>
      </View>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardProfile);
