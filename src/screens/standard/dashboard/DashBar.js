import React from "react";
import { connect } from "react-redux";
import { ProgressBar } from "react-native-paper";
import styled from "styled-components/native";

export const DashBar = (props) => {
  const { allBlockers, category, color, image, from } = props;
  const catBlockers = allBlockers.filter(
    (blocker) => blocker.category === category.toLowerCase()
  );

  const totalcatPtsArr = catBlockers.map((blocker) => {
    return blocker.points;
  });
  const totalcatPts = totalcatPtsArr.reduce((acc, cur) => {
    return acc + cur;
  });

  const showProgressBarInDashboardHome = () => {
    const completedBlockers = catBlockers.filter(
      (blocker) => blocker.completedAt !== null
    );
    if (completedBlockers && completedBlockers.length > 0) {
      const currentcatPtsArr = completedBlockers.map((completedBlocker) => {
        return completedBlocker.points;
      });
      const currentcatPts = currentcatPtsArr.reduce((acc, cur) => {
        return acc + cur;
      });
      return (
        <>
          <ProgressBar
            progress={currentcatPts / totalcatPts}
            color={color}
            transform={[{ scaleX: 1.0 }, { scaleY: 2.5 }]}
          />
          <ProgressText>
            {currentcatPts} OUT OF {totalcatPts} COMPLETE
          </ProgressText>
        </>
      );
    } else {
      return (
        <>
          <ProgressBar
            progress={0}
            color={color}
            transform={[{ scaleX: 1.0 }, { scaleY: 2.5 }]}
          />
          <ProgressText>0 OUT OF {totalcatPts} COMPLETE</ProgressText>
        </>
      );
    }
  };

  const showProgressBarInBlockers = () => {
    const completedBlockers = catBlockers.filter(
      (blocker) => blocker.completedAt !== null
    );
    if (completedBlockers && completedBlockers.length > 0) {
      const currentcatPtsArr = completedBlockers.map((completedBlocker) => {
        return completedBlocker.points;
      });
      const currentcatPts = currentcatPtsArr.reduce((acc, cur) => {
        return acc + cur;
      });
      return (
        <>
          <ProgressText>
            {currentcatPts} OUT OF {totalcatPts} COMPLETE
          </ProgressText>
          <ProgressBar
            progress={currentcatPts / totalcatPts}
            color={color}
            transform={[{ scaleX: 1.3 }, { scaleY: 2.5 }]}
          />
        </>
      );
    } else {
      return (
        <>
          <ProgressText>0 OUT OF {totalcatPts} COMPLETE</ProgressText>
          <ProgressBar
            progress={0}
            color={color}
            transform={[{ scaleX: 1.3 }, { scaleY: 2.5 }]}
          />
        </>
      );
    }
  };

  const checkPrecComp = () => {
    if (from === "DashboardMain") {
      return (
        <ProgressContainer>
          <ProgressWrapper>{image}</ProgressWrapper>
          <ProgressWrapper>
            <CategoryText style={{ color: color }}>{category}</CategoryText>
            {showProgressBarInDashboardHome()}
          </ProgressWrapper>
        </ProgressContainer>
      );
    } else if (from === "Checkin") {
      return (
        <ProgressWrapperBlockers>
          <CategoryTextBlockers style={{ color: color }}>
            {category}
          </CategoryTextBlockers>
          {showProgressBarInBlockers()}
        </ProgressWrapperBlockers>
      );
    }
  };

  return <>{checkPrecComp()}</>;
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
const ProgressWrapperBlockers = styled.View`
  margin-bottom: 12px;
  margin-left: 12px;
`;
const CategoryText = styled.Text`
  font-size: 28px;
  font-weight: 900;
  margin-bottom: 12px;
`;
const CategoryTextBlockers = styled.Text`
  font-size: 36px;
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

export default connect(mapStateToProps)(DashBar);
