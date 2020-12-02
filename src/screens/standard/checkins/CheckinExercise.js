import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import bg from "../../../styles/ScreenStyle.js";
import SvgCheckinExercise from "../../../svg_assets/SvgCheckinExercise";
import BlockerExercise from "./BlockerExercise";
import DashBar from "../dashboard/DashBar";

export const CheckinExercise = () => {
  return (
    <ScrollView>
      <Container style={bg.berry}>
        <CheckinContainer>
          <SvgCheckinExercise />
          <DashBar category={"Exercise"} color={"#d8a1d5"} from={"Checkin"} />
        </CheckinContainer>
        <ListContainer>
          <ListHeaderTextWrapper>
            <ListHeaderText>TAP TO COMPLETE</ListHeaderText>
            <ListHeaderText>REFRESH</ListHeaderText>
          </ListHeaderTextWrapper>
          <BlockerExercise />
        </ListContainer>
      </Container>
    </ScrollView>
  );
};

const Container = styled.View`
  flex: 1;
  height: 100%;
`;
const CheckinContainer = styled.View`
  align-items: center;
  justify-content: center;
`;
const ListContainer = styled.View`
  margin-top: 36;
  margin-right: 12;
  margin-left: 12;
  margin-bottom: 36;
  justify-content: center;
`;
const ListHeaderTextWrapper = styled.View`
  height: 20;
  flex-direction: row;
  justify-content: space-between;
  margin: 12px;
`;
const ListHeaderText = styled.Text`
  color: #d8a1d5;
  font-size: 12px;
  font-weight: 900;
`;

export default CheckinExercise;
