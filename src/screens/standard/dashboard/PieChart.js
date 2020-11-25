import React from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { VictoryPie } from "victory-native";
import Svg from "react-native-svg";

export const PieChart = () => {
  const data = [
    { x: "Social", y: 35 },
    { x: "Exercise", y: 40 },
    { x: "Music", y: 55 },
  ];

  return (
    <>
      <View>
        <Svg width={400} height={400}>
          <VictoryPie
            standalone={false}
            innerRadius={75}
            labelRadius={125}
            data={data}
            style={{ labels: { fontSize: 20 } }}
          />
        </Svg>
      </View>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PieChart);
