import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { VictoryPie } from "victory-native";
import Svg from "react-native-svg";

export const PieChart = (props) => {
  const { blockers } = props;

  const data = [
    { x: "Social", y: 100 },
    { x: "Exercise", y: 40 },
    { x: "Music", y: 55 },
  ];

  return (
    <>
      <View>
        <Svg width={400} height={400} viewBox="0 0 400 400" style={{ width: "100%", height: "auto" }}>
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

const mapStateToProps = (state) => {
  return{
    blockers: state.blockersState.blockers
  }
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PieChart);
