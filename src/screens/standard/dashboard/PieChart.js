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
  const musicBlockers = allBlockers.filter(
    (blocker) => blocker.category === "music"
  );
  const socialBlockers = allBlockers.filter(
    (blocker) => blocker.category === "social"
  );

  const displayPieChart = () => {
    const data = [
      { x: "Music", y: musicPts() },
      { x: "Exercise", y: exercisePts() },
      { x: "Social", y: socialPts() },
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

  const exercisePts = () => {
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
      return currentExercisePts
    }
  };
  
  const musicPts = () => {
    const completedBlockers = musicBlockers.filter(
      (blocker) => blocker.completedAt !== null
    );
    let currentMusicPts = 0;
    if (completedBlockers && completedBlockers.length > 0) {
      const currentMusicPtsArr = completedBlockers.map(
        (completedBlocker) => {
          return completedBlocker.points;
        }
      );
      currentMusicPts = currentMusicPtsArr.reduce((acc, cur) => {
        return acc + cur;
      });
      return currentMusicPts
    }
  };
  
  const socialPts = () => {
    const completedBlockers = socialBlockers.filter(
      (blocker) => blocker.completedAt !== null
    );
    let currentSocialPts = 0;
    if (completedBlockers && completedBlockers.length > 0) {
      const currentSocialPtsArr = completedBlockers.map(
        (completedBlocker) => {
          return completedBlocker.points;
        }
      );
      currentSocialPts = currentSocialPtsArr.reduce((acc, cur) => {
        return acc + cur;
      });
      return currentSocialPts
    }
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
          {displayPieChart()}
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
