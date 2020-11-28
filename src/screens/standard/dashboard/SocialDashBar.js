import React from "react";
import { connect } from "react-redux";
import { ProgressBar } from "react-native-paper";
import styled from "styled-components/native";
import SvgSocial from "../../../svg_assets/SvgSocial";

export const SocialDashBar = (props) => {
  const { allBlockers } = props;
  const socialBlockers = allBlockers.filter(
    (blocker) => blocker.category === "social"
  );
  const sortedBlockersByCompletedAt = socialBlockers.sort(function (a, b) {
    return b.completedAt - a.completedAt;
  });
  const mostRecentCompletedBlocker = sortedBlockersByCompletedAt[0];

  const mostRecentCompletedDate = mostRecentCompletedBlocker.completedAt;

  const totalSocialPtsArr = socialBlockers.map((blocker) => {
    return blocker.points;
  });
  const totalSocialPts = totalSocialPtsArr.reduce((acc, cur) => {
    return acc + cur;
  });

  const showProgressBar = () => {
    const completedBlockers = socialBlockers.filter(
      (blocker) => blocker.completedAt !== null
    );
    if (completedBlockers && completedBlockers.length > 0) {
      const currnteSocialPtsArr = completedBlockers.map((completedBlocker) => {
        return completedBlocker.points;
      });
      const currentSocialPts = currnteSocialPtsArr.reduce((acc, cur) => {
        return acc + cur;
      });
      const totalSocialPtsArr = socialBlockers.map((blocker) => {
        return blocker.points;
      });
      const totalSocialPts = totalSocialPtsArr.reduce((acc, cur) => {
        return acc + cur;
      });
      const month = mostRecentCompletedDate.getMonth() + 1;
      const day = mostRecentCompletedDate.getDate();
      const year = mostRecentCompletedDate.getFullYear();

      return (
        <>
          <ProgressBar
            progress={currentSocialPts / totalSocialPts}
            color={"#E0C45E"}
            transform={[{ scaleX: 1.0 }, { scaleY: 2.5 }]}
          />
          <ProgressText>
            {currentSocialPts} OUT OF {totalSocialPts} COMPLETE
          </ProgressText>
        </>
      );
    } else {
      return (
        <>
          <ProgressBar
            progress={0}
            color={"#E0C45E"}
            transform={[{ scaleX: 1.0 }, { scaleY: 2.5 }]}
          />
          <ProgressText>0 OUT OF {totalSocialPts} COMPLETE</ProgressText>
        </>
      );
    }
  };

  return (
    <>
      <ProgressContainer>
        <ProgressWrapper>
          <SvgSocial />
        </ProgressWrapper>
        <ProgressWrapper>
          <CategoryText>Social</CategoryText>
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
`;
const ProgressWrapper = styled.View`
  margin-bottom: 12px;
  margin-left: 24px;
`;
const CategoryText = styled.Text`
  font-size: 28px;
  color: #e0c45e;
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

export default connect(mapStateToProps)(SocialDashBar);
