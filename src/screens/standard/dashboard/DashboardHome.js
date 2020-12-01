import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import bg from "../../../styles/ScreenStyle";
import SvgBrioHome from "../../../svg_assets/SvgBrioHome";
import SvgExercise from "../../../svg_assets/SvgExercise";
import SvgArrowExercise from "../../../svg_assets/SvgArrowExercise";
import SvgMusic from "../../../svg_assets/SvgMusic";
import SvgArrowMusic from "../../../svg_assets/SvgArrowMusic";
import SvgSocial from "../../../svg_assets/SvgSocial";
import SvgArrowSocial from "../../../svg_assets/SvgArrowSocial";
import styled from "styled-components/native";
import DashList from "./DashList";

export const DashboardHome = (props) => {
  const { allBlockers } = props;

  const exeBlockers = allBlockers.filter(
    (blocker) => blocker.category === "exercise"
  );
  const sortedExeBlockersByCompletedAt = exeBlockers.sort(function (a, b) {
    return b.completedAt - a.completedAt;
  });
  const mostRecentCompletedExeBlocker = sortedExeBlockersByCompletedAt[0];

  const mostRecentCompletedDateExe = mostRecentCompletedExeBlocker.completedAt;

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];


  return (
    <>
      <View style={bg.basic}>
        <DiagramContainer>
          <SvgBrioHome />
          <Diagram>
            <DiagramTextHeader>Oh my gosh!</DiagramTextHeader>
            <DiagramText>This is going to be so much fun. </DiagramText>
            <DiagramText>What are we going to do today?</DiagramText>
          </Diagram>
        </DiagramContainer>
        <DashList
          category={"Exercise"}
          color={"#d8a1d5"}
          image={<SvgExercise />}
          arrow={<SvgArrowExercise />}
        />
        <DashList
          category={"Music"}
          color={"#94D7B5"}
          image={<SvgMusic />}
          arrow={<SvgArrowMusic />}
        />
        <DashList
          category={"Social"}
          color={"#E0C45E"}
          image={<SvgSocial />}
          arrow={<SvgArrowSocial />}
        />
      </View>
    </>
  );
};

const DiagramContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 36;
`;
const Diagram = styled.View`
  margin-top: 36;
`;
const DiagramTextHeader = styled.Text`
  font-size: 35px;
  color: #51ade0;
  font-weight: 900;
  background-color: #fff;
  padding: 10px;
`;
const DiagramText = styled.Text`
  font-size: 18px;
  color: #51ade0;
  font-weight: 900;
  background-color: #fff;
  padding-left: 10px;
  padding-right: 10px;
`;

const mapStateToProps = (state) => {
  return {
    allBlockers: state.blockersState.blockers,
  };
};

export default connect(mapStateToProps)(DashboardHome);
