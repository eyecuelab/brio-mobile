import React from "react";
import { View, Text, ScrollView } from "react-native";
import { connect } from "react-redux";
import bg from "../../../styles/ScreenStyle";
import PieChart from "./PieChart";
import SocialDashBar from "./SocialDashBar";
import ExerciseDashBar from "./ExerciseDashBar";
import MusicDashBar from "./MusicDashBar";
import styled from "styled-components/native";
import SvgBrioFront from "../../../svg_assets/SvgBrioFront";
import SvgMusic from "../../../svg_assets/SvgMusic";
import SvgExercise from "../../../svg_assets/SvgExercise";
import SvgSocial from "../../../svg_assets/SvgSocial";

function DashboardPage(props) {
  const { allBlockers } = props;

  const pieOrMsg = () => {
    if (allBlockers && allBlockers.length > 0) {
      const completedBlockers = allBlockers.filter(
        (blocker) => blocker.completedAt !== null
      );
      if (completedBlockers && completedBlockers.length === 0) {
        console.log(completedBlockers);
        return (
          <>
            <DiagramContainer>
              <SvgBrioFront />
              <Diagram>
                <DiagramText>You haven't got points yet </DiagramText>
              </Diagram>
            </DiagramContainer>
          </>
        );
      } else {
        return (
          <>
            <DiagramContainer>
              <SvgBrioFront />
              <Diagram>
                <DiagramText>Welcome back Kiwi! </DiagramText>
                <DiagramText> You look great!</DiagramText>
              </Diagram>
            </DiagramContainer>
            <PieChart />
          </>
        );
      }
    }
  };

  const allBlockersInfo = () => {
    return (
      <>
        <View>
          <SocialDashBar />
          <ExerciseDashBar />
          <MusicDashBar />
        </View>
      </>
    );
  };

  return (
    <>
      <ScrollView>
        <View style={bg.basic}>
          {pieOrMsg()}
          {allBlockersInfo()}
          <SvgMusic />
          <SvgExercise />
          <SvgSocial />
        </View>
      </ScrollView>
    </>
  );
}

const DiagramContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
`;
const Diagram = styled.View`
  justify-content: center;
  margin-right: 10;
  margin-left: 10;
`;
const DiagramText = styled.Text`
  font-size: 18px;
  color: #51ade0;
  font-weight: 900;
`;

const mapStateToProps = (state) => {
  return {
    allBlockers: state.blockersState.blockers,
  };
};

const DashboardPageConnected = connect(mapStateToProps)(DashboardPage);
export default DashboardPageConnected;
