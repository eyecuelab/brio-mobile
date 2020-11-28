import React from "react";
import { View, ScrollView } from "react-native";
import { connect } from "react-redux";
import bg from "../../../styles/ScreenStyle";
import PieChart from "./PieChart";
import DashBar from "./DashBar";
import styled from "styled-components/native";
import SvgBrioFront from "../../../svg_assets/SvgBrioFront";
import SvgExercise from "../../../svg_assets/SvgExercise";
import SvgMusic from "../../../svg_assets/SvgMusic";
import SvgSocial from "../../../svg_assets/SvgSocial";

function DashboardMain(props) {
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

  return (
    <>
      <ScrollView>
        <View style={bg.basic}>
          {pieOrMsg()}
          <DashBar
            category={"Exercise"}
            color={"#d8a1d5"}
            image={<SvgExercise />}
          />
          <DashBar category={"Music"} color={"#94D7B5"} image={<SvgMusic />} />
          <DashBar
            category={"Social"}
            color={"#E0C45E"}
            image={<SvgSocial />}
          />
        </View>
      </ScrollView>
    </>
  );
}

const DiagramContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  margin-top: 28;
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

const DashboardMainConnected = connect(mapStateToProps)(DashboardMain);
export default DashboardMainConnected;
