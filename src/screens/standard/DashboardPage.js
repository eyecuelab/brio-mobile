import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import * as actions from "../../rdx/actions";
import bg from "../../styles/ScreenStyle";
import { Card } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome5";

function DashboardPage(props) {
  const { dispatch, allBlockers } = props;

  useEffect(() => {
    const action = actions.loadedBlockers();
    dispatch(action);
    return () => {};
  }, []);

  const numOfBlockersDisp = () => {
    if (allBlockers && allBlockers.length > 0) {
      const totalPtsArr = allBlockers.map((blocker) => {
        return blocker.points;
      });
      const totalPts = totalPtsArr.reduce((acc, cur) => {
        return acc + cur;
      });
      return (
        <View>
          <Text>total points: {totalPts}</Text>
        </View>
      );
    }
  };

  return (
    <>
      <View style={bg.robin}>
        <Card.Title
          subtitle="Welcome back! You are doing great!"
          left={(props) => (
            <Icon name="grin-stars" size={30} color="#900" {...props} />
          )}
        />
        {numOfBlockersDisp()}
      </View>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    allBlockers: state.blockersState.blockers,
  };
};
const DashboardPageConnected = connect(mapStateToProps)(DashboardPage);
export default DashboardPageConnected;
