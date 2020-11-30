import React from "react";
import { connect } from "react-redux";
import { List } from "react-native-paper";

export const DashList = (props) => {
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
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    allBlockers: state.blockersState.blockers,
  }
};

export default connect(mapStateToProps)(DashList);
