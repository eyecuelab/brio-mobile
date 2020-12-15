import React, { useState } from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import bg from "../../../styles/ScreenStyle.js";
import SvgCheckinMusic from "../../../svg_assets/SvgCheckinMusic";
import Blocker from "./Blocker";
import DashBar from "../dashboard/DashBar";
import Modal from "./Modal";

export const CheckinMusic = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Container style={bg.mint}>
      <ScrollView>
        <CheckinContainer>
          <SvgCheckinMusic />
          <DashBar category={"Music"} color={"#94D7B5"} from={"Checkin"} />
        </CheckinContainer>
        <ListContainer>
          <ListHeaderTextWrapper>
            <ListHeaderText>CLICK ICON FOR TIPS</ListHeaderText>
            <ListHeaderText>TAP BAR TO COMPLETE</ListHeaderText>
          </ListHeaderTextWrapper>
          <Blocker
            setShowModal={setShowModal}
            category={"music"}
            color1={"#94D7B5"}
            color2={"#DAF3E6"}
          />
        </ListContainer>
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          color={"#12492E"}
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
  color: #94d7b5;
  font-size: 12px;
  font-weight: 900;
`;

export default CheckinMusic;
