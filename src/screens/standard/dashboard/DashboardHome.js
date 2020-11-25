import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import bg from "../../../styles/ScreenStyle";
import { Card } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome5";
import PieChart from "./PieChart";
import SocialDashBar from "./SocialDashBar";
import ExerciseDashBar from "./ExerciseDashBar";
import MusicDashBar from "./MusicDashBar";

function DashboardPage(props) {
  const { allBlockers } = props;

  const allBlockersInfo = () => {
    if (allBlockers && allBlockers.length > 0) {
      const totalPtsArr = allBlockers.map((blocker) => {
        return blocker.points;
      });
      const totalPts = totalPtsArr.reduce((acc, cur) => {
        return acc + cur;
      });
      return (
        <>
          <View>
            <PieChart />
            <SocialDashBar />
            <ExerciseDashBar />
            <MusicDashBar />
            <View>
              <Text>Total tasks: {allBlockers.length}</Text>
            </View>
            <View>
              <Text>Total points: {totalPts}</Text>
            </View>
          </View>
        </>
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
        {allBlockersInfo()}
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
