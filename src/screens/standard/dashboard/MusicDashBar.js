import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

export const MusicDashBar = (props) => {
  const { allBlockers } = props;
  const convBlockers = allBlockers.filter(
    (blocker) => blocker.category === "music"
  );
  const sortedBlockersByCompletedAt = convBlockers.sort(function (a, b) {
    return b.completedAt - a.completedAt;
  });
  const mostRecentCompletedBlocker = sortedBlockersByCompletedAt[0];

  const mostRecentCompletedDate = mostRecentCompletedBlocker.completedAt;

  const ExerciseProgress = () => {
    const completedBlockers = convBlockers.filter(
      (blocker) => blocker.completedAt !== null
    );
    if (completedBlockers && completedBlockers.length > 0) {
      const currnteConvPtsArr = completedBlockers.map((completedBlocker) => {
        return completedBlocker.points;
      });
      const currentConvPts = currnteConvPtsArr.reduce((acc, cur) => {
        return acc + cur;
      });
      const totalConvPtsArr = convBlockers.map((blocker) => {
        return blocker.points;
      });
      const totalConvPts = totalConvPtsArr.reduce((acc, cur) => {
        return acc + cur;
      });
      const month = mostRecentCompletedDate.getMonth() + 1;
      const day = mostRecentCompletedDate.getDate();
      const year = mostRecentCompletedDate.getFullYear();

      return (
        <>
          <View>
            <Text>
              Music points: {currentConvPts} out of {totalConvPts}{" "}
            </Text>
            <Text>
              Last updated: {month}/{day}/{year}
            </Text>
          </View>
        </>
      );
    }
  };

  return <>{ExerciseProgress()}</>;
};

const mapStateToProps = (state) => {
  return {
    allBlockers: state.blockersState.blockers,
  };
};

export default connect(mapStateToProps)(MusicDashBar);
