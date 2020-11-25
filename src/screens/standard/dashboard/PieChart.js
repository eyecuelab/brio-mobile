import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { VictoryPie } from "victory-native";
import Svg from "react-native-svg";

export const PieChart = (props) => {
  const { allBlockers } = props;

  const exerciseBlockers = allBlockers.filter(
    (blocker) => blocker.category === "exercise"
  );

  const getData = () => {
    const completedBlockers = exerciseBlockers.filter(
      (blocker) => blocker.completedAt !== null
    );
    let currentExercisePts = 0;
    if (completedBlockers && completedBlockers.length > 0) {
      const currentExercisePtsArr = completedBlockers.map(
        (completedBlocker) => {
          return completedBlocker.points;
        }
      );
      currentExercisePts = currentExercisePtsArr.reduce((acc, cur) => {
        return acc + cur;
      });
    }

    const data = [
      { x: "Social", y: 100 },
      { x: "Exercise", y: currentExercisePts },
      { x: "Music", y: 55 },
    ];

    return (
      <VictoryPie
        standalone={false}
        innerRadius={75}
        labelRadius={125}
        data={data}
        style={{ labels: { fontSize: 20 } }}
      />
    );
  };

  return (
    <>
      <View>
        <Svg
          width={400}
          height={400}
          viewBox="0 0 400 400"
          style={{ width: "100%", height: "auto" }}
        >
          {getData()}
        </Svg>
      </View>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    allBlockers: state.blockersState.blockers,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PieChart);
