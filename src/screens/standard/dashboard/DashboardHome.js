import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import bg from "../../../styles/ScreenStyle";
import PieChart from "./PieChart";
import SocialDashBar from "./SocialDashBar";
import ExerciseDashBar from "./ExerciseDashBar";
import MusicDashBar from "./MusicDashBar";
import SvgBrioFront from "../../../svg_assets/SvgBrioFront";
import SvgMusic from "../../../svg_assets/SvgMusic";
import SvgExercise from "../../../svg_assets/SvgExercise";
import SvgSocial from "../../../svg_assets/SvgSocial";

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

      const pieChartOrMessage = () => {
        if (allBlockers.length > 0) {
          return (
            <>
              <PieChart />
            </>
          );
        }
      };

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
      <View style={bg.basic}>
        <View>
          <SvgBrioFront />
          <Text>Welcome back username! You look great!</Text>
        </View>
        <SvgMusic />
        <SvgExercise />
        <SvgSocial />
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
