import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { ProgressBar } from "react-native-paper";
import SvgExercise from "../../../svg_assets/SvgExercise";
import styled from "styled-components/native";

export const ExerciseDashBar = (props) => {
  const { allBlockers } = props;
  const exerciseBlockers = allBlockers.filter(
    (blocker) => blocker.category === "exercise"
  );
  const sortedBlockersByCompletedAt = exerciseBlockers.sort(function (a, b) {
    return b.completedAt - a.completedAt;
  });
  const mostRecentCompletedBlocker = sortedBlockersByCompletedAt[0];

  const mostRecentCompletedDate = mostRecentCompletedBlocker.completedAt;

  const totalExercisePtsArr = exerciseBlockers.map((blocker) => {
    return blocker.points;
  });
  const totalExercisePts = totalExercisePtsArr.reduce((acc, cur) => {
    return acc + cur;
  });

  const showProgressBar = () => {
    const completedBlockers = exerciseBlockers.filter(
      (blocker) => blocker.completedAt !== null
    );
    if (completedBlockers && completedBlockers.length > 0) {
      const currentexercisePtsArr = completedBlockers.map(
        (completedBlocker) => {
          return completedBlocker.points;
        }
      );
      const currentExercisePts = currentexercisePtsArr.reduce((acc, cur) => {
        return acc + cur;
      });

      const month = mostRecentCompletedDate.getMonth() + 1;
      const day = mostRecentCompletedDate.getDate();
      const year = mostRecentCompletedDate.getFullYear();

      return (
        <>
          <ProgressBar
            progress={currentExercisePts / totalExercisePts}
            color={"#D8A1D5"}
            transform={[{ scaleX: 1.0 }, { scaleY: 2.5 }]}
          />
          <ProgressText>
            {currentExercisePts} OUT OF {totalExercisePts} COMPLETE
          </ProgressText>
        </>
      );
    } else {
      return (
        <>
          <ProgressBar
            progress={0}
            color={"#D8A1D5"}
            transform={[{ scaleX: 1.0 }, { scaleY: 2.5 }]}
          />
          <ProgressText>0 OUT OF {totalExercisePts} COMPLETE</ProgressText>
        </>
      );
    }
  };

  return (
    <>
      <ProgressContainer>
        <ProgressWrapper>
          <SvgExercise />
        </ProgressWrapper>
        <ProgressWrapper>
          <CategoryText>Exercise</CategoryText>
          {showProgressBar()}
        </ProgressWrapper>
      </ProgressContainer>
    </>
  );
};

const ProgressContainer = styled.View`
  flex: 1;
  flex-direction: row;
  margin-bottom: 12px;
  margin-left: 24px;
`;
const ProgressWrapper = styled.View`
  margin-bottom: 12px;
  margin-left: 24px;
`;
const CategoryText = styled.Text`
  font-size: 28px;
  color: #d8a1d5;
  font-weight: 900;
  margin-bottom: 12px;
`;
const ProgressText = styled.Text`
  margin-top: 12px;
  margin-bottom: 12px;
  font-size: 10px;
  color: #dea768;
  font-weight: 900;
`;

const mapStateToProps = (state) => {
  return {
    allBlockers: state.blockersState.blockers,
  };
};

export default connect(mapStateToProps)(ExerciseDashBar);
