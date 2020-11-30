import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import bg from "../../../styles/ScreenStyle";
import SvgBrioHome from "../../../svg_assets/SvgBrioHome";
import SvgExercise from "../../../svg_assets/SvgExercise";
import SvgArrowExercise from "../../../svg_assets/SvgArrowExercise";
import SvgArrowMusic from "../../../svg_assets/SvgArrowMusic";
import SvgArrowSocial from "../../../svg_assets/SvgArrowSocial";
import SvgMusic from "../../../svg_assets/SvgMusic";
import SvgSocial from "../../../svg_assets/SvgSocial";
import styled from "styled-components/native";
import { List } from "react-native-paper";

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

  const exeMonth = months[mostRecentCompletedDateExe.getMonth()];
  const exeDay = days[mostRecentCompletedDateExe.getDay()];
  const exeDate = mostRecentCompletedDateExe.getDate();
  const exeYear = mostRecentCompletedDateExe.getFullYear();

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
        <List.Item
          title="Exercise"
          titleStyle={{
            fontFamily: "Avenir-Light",
            color: "#D8A1D5",
            fontSize: 36,
            fontWeight: "bold",
          }}
          description={`LAST CHECKIN \n${exeDay} ${exeMonth} ${exeDate}, ${exeYear}`}
          descriptionNumberOfLines={2}
          descriptionStyle={{
            fontFamily: "Avenir-Light",
            color: "#ECC08E",
            fontSize: 10,
            fontWeight: "bold",
          }}
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
            padding: 20,
            margin: "auto",
          }}
          left={(props) => <SvgExercise {...props} />}
          right={(props) => <SvgArrowExercise {...props} />}
        />
        <List.Item
          title="Music"
          titleStyle={{
            fontFamily: "Avenir-Light",
            color: "#94D7B5",
            fontSize: 36,
            fontWeight: "bold",
          }}
          description="LAST CHECKIN Sunday Nov 22, 2020"
          descriptionNumberOfLines={2}
          descriptionStyle={{
            fontFamily: "Avenir-Light",
            color: "#ECC08E",
            fontSize: 10,
            fontWeight: "bold",
          }}
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
            padding: 20,
            margin: "auto",
          }}
          left={(props) => <SvgMusic {...props} />}
          right={(props) => <SvgArrowMusic {...props} />}
        />
        <List.Item
          title="Social"
          titleStyle={{
            fontFamily: "Avenir-Light",
            color: "#E0C45E",
            fontSize: 36,
            fontWeight: "bold",
          }}
          description="LAST CHECKIN Sunday Nov 22, 2020"
          descriptionNumberOfLines={2}
          descriptionStyle={{
            fontFamily: "Avenir-Light",
            color: "#ECC08E",
            fontSize: 10,
            fontWeight: "bold",
          }}
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
            padding: 20,
            margin: "auto",
          }}
          left={(props) => <SvgSocial {...props} />}
          right={(props) => <SvgArrowSocial {...props} />}
        />
      </View>
    </>
  );
};

const DiagramContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  margin-top: 28;
`;
const Diagram = styled.View`
  margin-top: 28;
`;
const DiagramTextHeader = styled.Text`
  font-size: 35px;
  color: #51ade0;
  font-weight: 900;
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

export default connect(mapStateToProps)(DashboardHome);
