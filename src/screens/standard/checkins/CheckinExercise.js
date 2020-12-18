import React, { useState } from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import bg from "../../../styles/ScreenStyle.js";
import SvgCheckinExercise from "../../../svg_assets/SvgCheckinExercise";
import Blocker from "./Blocker";
import DashBar from "../dashboard/DashBar";
import Modal from "./Modal";

export const CheckinExercise = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Container style={bg.berry}>
      <ScrollView>
        <CheckinContainer>
          <SvgCheckinExercise />
          <DashBar category={"Exercise"} color={"#d8a1d5"} from={"Checkin"} />
        </CheckinContainer>
        <ListContainer>
          <ListHeaderTextWrapper>
            <ListHeaderText>CLICK ICON FOR TIPS</ListHeaderText>
            <ListHeaderText>TAP BAR TO COMPLETE</ListHeaderText>
          </ListHeaderTextWrapper>
          <Blocker
            setShowModal={setShowModal}
            category={"exercise"}
            color1={"#D8A1D5"}
            color2={"#FFE3E3"}
          />
        </ListContainer>
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          color={"#d587b5"}
        />
      </ScrollView>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  height: 100%;
`;
const CheckinContainer = styled.View`
  padding-top: 15%;
  padding-bottom: 10%
  flex-flow: column;
  align-items: center;
  justify-content: flex-start;
`;
const ListContainer = styled.View`
  margin-right: 12;
  margin-left: 12;
  margin-bottom: 36;
  justify-content: center;
`;
const ListHeaderTextWrapper = styled.View`
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
