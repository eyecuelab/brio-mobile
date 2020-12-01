import React from "react";
import { connect } from "react-redux";
import { List } from "react-native-paper";
import styled from "styled-components/native";

export const DashList = (props) => {
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

  const { allBlockers, category, color, image, arrow } = props;

  const catBlockers = allBlockers.filter(
    (blocker) => blocker.category === category.toLowerCase()
  );

  const completedBlockers = catBlockers.filter(
    (blocker) => blocker.completedAt !== null
  );

  const description = () => {
    if (completedBlockers && completedBlockers.length > 0) {
      const sortedBlockersByCompletedAt = completedBlockers.sort(function (
        a,
        b
      ) {
        return b.completedAt - a.completedAt;
      });
      const mostRecentCompletedBlocker = sortedBlockersByCompletedAt[0];

      const mostRecentCompletedDate = mostRecentCompletedBlocker.completedAt;

      const month = months[mostRecentCompletedDate.getMonth()];
      const day = days[mostRecentCompletedDate.getDay()];
      const date = mostRecentCompletedDate.getDate();
      const year = mostRecentCompletedDate.getFullYear();

      return `LAST CHECKIN \n${day} ${month} ${date}, ${year}`;
    } else {
      return "NO COMPLETED BLOCKERS YET";
    }
  };

  return (
    <>
      <ListWrapper>
        <List.Item
          title={category}
          titleStyle={{
            fontFamily: "Avenir-Light",
            color: `${color}`,
            fontSize: 32,
            fontWeight: "bold",
          }}
          description={description()}
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
          left={() => <ListImage>{image}</ListImage>}
          right={() => <ListImage>{arrow}</ListImage>}
        />
      </ListWrapper>
    </>
  );
};

const ListWrapper = styled.View`
  margin: 6px;
`;
const ListImage = styled.View`
  flex-direction: column;
  justify-content: center;
`;

const mapStateToProps = (state) => {
  return {
    allBlockers: state.blockersState.blockers,
  };
};

export default connect(mapStateToProps)(DashList);
