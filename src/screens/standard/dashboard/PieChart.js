import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

export const PieChart = () => {
  return (
    <>
      <View>
        <Text>Pie chart</Text>
      </View>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PieChart);
