import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

export const ConvoDashBar = (props) => {
  const { dispatch, allBlockers } = props;
  const convBlockers = allBlockers.filter(
    (blocker) => blocker.category === "conversation"
  );

  const ConvProgress = () => {
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
      return (
        <>
          <View>
            <Text>
              Conversation points: {currentConvPts} out of {totalConvPts}{" "}
            </Text>
          </View>
        </>
      );
    }
  };

  return (
    <>
    {ConvProgress()}
    </>
    )
};

const mapStateToProps = (state) => {
  return {
    allBlockers: state.blockersState.blockers,
  };
};

export default connect(mapStateToProps)(ConvoDashBar);
