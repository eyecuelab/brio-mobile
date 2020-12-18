import React from "react";
import { View, ScrollView } from "react-native";
import { connect } from "react-redux";
import * as actions from "../../../rdx/actions";
import bg from "../../../styles/ScreenStyle";
import { Button } from "react-native-paper";
import PieChart from "./PieChart";
import DashBar from "./DashBar";
import styled from "styled-components/native";
import SvgBrioPie from "../../../svg_assets/SvgBrioPie";
import SvgExercise from "../../../svg_assets/SvgExercise";
import SvgMusic from "../../../svg_assets/SvgMusic";
import SvgSocial from "../../../svg_assets/SvgSocial";
import SadPieChart from "./SadPieChart";

function DashboardMain(props) {
  const { allBlockers, dispatch, username } = props;

  const pieOrMsg = () => {
    if (allBlockers && allBlockers.length > 0) {
      const completedBlockers = allBlockers.filter(
        (blocker) => blocker.completedAt !== null
      );
      if (completedBlockers && completedBlockers.length === 0) {
        return (
          <>
            <DiagramContainer>
              <SvgBrioPie />
              <TextBox>
                <DiagramHeader>You haven't got points yet! </DiagramHeader>
                <DiagramHeader>Tap categories below!</DiagramHeader>
              </TextBox>
            </DiagramContainer>
            <SadPieChart />
          </>
        );
      } else {
        return (
          <>
            <DiagramContainer>
              <SvgBrioPie />
              <TextBox>
                <DiagramHeader>Welcome back {username}!</DiagramHeader>
                <DiagramHeader>You look great!</DiagramHeader>
              </TextBox>
            </DiagramContainer>
            <PieChart />
          </>
        );
      }
    }
  };

  const resetProgress = () => {
    const action = actions.resetProgress();
    dispatch(action);
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
            from={"DashboardMain"}
          />
          <DashBar
            category={"Music"}
            color={"#94D7B5"}
            image={<SvgMusic />}
            from={"DashboardMain"}
          />
          <DashBar
            category={"Social"}
            color={"#E0C45E"}
            image={<SvgSocial />}
            from={"DashboardMain"}
          />
          {/* temporary reset button */}
          <Button
            mode="contained"
            color="#FFCD1A"
            labelStyle={{ color: "#fff" }}
            style={{ marginTop: 100 }}
            onPress={() => {
              resetProgress();
            }}
          >
            {" "}
            Reset Progress{" "}
          </Button>
        </View>
      </ScrollView>
    </>
  );
}

const DiagramContainer = styled.View`
  flex: 1;
  flex-flow: row;
  justify-content: center;
  margin-top: 28px;
`;
const TextBox = styled.View`
  position: absolute;
  max-height: 125px;
  max-width: 200px;
  right: 20;
  top: 30;
`;
const DiagramHeader = styled.Text`
  font-size: 24px;
  color: #51ade0;
  font-weight: 900;
  margin-bottom: 2px;
`;

const mapStateToProps = (state) => {
  return {
    allBlockers: state.blockersState.blockers,
    username: state.user.username,
  };
};

const DashboardMainConnected = connect(mapStateToProps)(DashboardMain);
export default DashboardMainConnected;
