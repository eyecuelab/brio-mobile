import React from "react";
import { connect } from "react-redux";
import { ProgressBar } from "react-native-paper";
import styled from "styled-components/native";
import SvgMusic from "../../../svg_assets/SvgMusic";


export const MusicDashBar = (props) => {
  const { allBlockers } = props;
  const musicBlockers = allBlockers.filter(
    (blocker) => blocker.category === "music"
  );
  const sortedBlockersByCompletedAt = musicBlockers.sort(function (a, b) {
    return b.completedAt - a.completedAt;
  });
  const mostRecentCompletedBlocker = sortedBlockersByCompletedAt[0];

  const mostRecentCompletedDate = mostRecentCompletedBlocker.completedAt;

  const totalMusicPtsArr = musicBlockers.map((blocker) => {
    return blocker.points;
  });
  const totalMusicPts = totalMusicPtsArr.reduce((acc, cur) => {
    return acc + cur;
  });

  const showProgressBar = () => {
    const completedBlockers = musicBlockers.filter(
      (blocker) => blocker.completedAt !== null
    );
    if (completedBlockers && completedBlockers.length > 0) {
      const currnteMusicPtsArr = completedBlockers.map((completedBlocker) => {
        return completedBlocker.points;
      });
      const currentMusicPts = currnteMusicPtsArr.reduce((acc, cur) => {
        return acc + cur;
      });
      const totalMusicPtsArr = musicBlockers.map((blocker) => {
        return blocker.points;
      });
      const totalMusicPts = totalMusicPtsArr.reduce((acc, cur) => {
        return acc + cur;
      });
      const month = mostRecentCompletedDate.getMonth() + 1;
      const day = mostRecentCompletedDate.getDate();
      const year = mostRecentCompletedDate.getFullYear();

      return (
        <>
          <ProgressBar
            progress={currentMusicPts / totalMusicPts}
            color={"#D8A1D5"}
            transform={[{ scaleX: 1.0 }, { scaleY: 2.5 }]}
          />
          <ProgressText>
            {currentMusicPts} OUT OF {totalMusicPts} COMPLETE
          </ProgressText>
        </>
      );
    } else {
      return (
        <>
          <ProgressBar
            progress={0}
            color={"#94D7B5"}
            transform={[{ scaleX: 1.0 }, { scaleY: 2.5 }]}
          />
          <ProgressText>0 OUT OF {totalMusicPts} COMPLETE</ProgressText>
        </>
      );
    }
  };

  return <><ProgressContainer>
  <ProgressWrapper>
    <SvgMusic />
  </ProgressWrapper>
  <ProgressWrapper>
    <CategoryText>Music</CategoryText>
    {showProgressBar()}
  </ProgressWrapper>
</ProgressContainer></>;
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
  color: #94D7B5;
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

export default connect(mapStateToProps)(MusicDashBar);
