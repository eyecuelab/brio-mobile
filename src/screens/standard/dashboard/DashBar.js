import React from "react";
import { connect } from "react-redux";
import { ProgressBar } from "react-native-paper";
import styled from "styled-components/native";

export const DashBar = (props) => {
  const { allBlockers, catPoints, category, color, image, from } = props;
  
  const catBlockers = allBlockers.filter(
    (blocker) => blocker.category === category.toLowerCase()
  );

  const totalCatBlockerPts = catBlockers
    .map((blocker) => {
      return blocker.points;
    })
    .reduce((acc, cur) => {
      return acc + cur;
    });

  const totalCatSuggestionPts = catBlockers
    .map((blocker) =>
      blocker.suggestions.map((suggestion) => suggestion.points)
    )
    .flat()
    .reduce((acc, cur) => {
      return acc + cur;
    });

  const totalCatPts = totalCatBlockerPts + totalCatSuggestionPts;

  const currentCatPts = catPoints[category.toLowerCase()];

  const showProgressBarInDashboardHome = () => {
    if (currentCatPts > 0) {
      return (
        <>
          <ProgressBar
            progress={currentCatPts / totalCatPts}
            color={color}
            transform={[{ scaleX: 1.0 }, { scaleY: 2.5 }]}
          />
          <ProgressText>
            {currentCatPts} OUT OF {totalCatPts} POINTS
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
          <ProgressText>0 OUT OF {totalCatPts} POINTS</ProgressText>
        </>
      );
    }
  };

  const showProgressBarInBlockers = () => {
    if (currentCatPts > 0) {
      return (
        <>
          <ProgressText>
            {currentCatPts} OUT OF {totalCatPts} POINTS
          </ProgressText>
          <ProgressBar
            progress={currentCatPts / totalCatPts}
            color={color}
            transform={[{ scaleX: 1.3 }, { scaleY: 2.5 }]}
          />
        </>
      );
    } else {
      return (
        <>
          <ProgressText>0 OUT OF {totalCatPts} POINTS</ProgressText>
          <ProgressBar
            progress={0}
            color={color}
            transform={[{ scaleX: 1.3 }, { scaleY: 2.5 }]}
          />
        </>
      );
    }
  };

  const checkPrevComp = () => {
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

  return <>{checkPrevComp()}</>;
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
    catPoints: state.blockersState.currentPoints,
  };
};

export default connect(mapStateToProps)(DashBar);
