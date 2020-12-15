import React, { useState } from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import bg from "../../../styles/ScreenStyle.js";
import SvgCheckinSocial from "../../../svg_assets/SvgCheckinSocial";
import Blocker from "./Blocker";
import DashBar from "../dashboard/DashBar";
import Modal from "./Modal";

export const CheckinSocial = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Container style={bg.citrus}>
      <ScrollView>
        <CheckinContainer>
          <SvgCheckinSocial />
          <DashBar category={"Social"} color={"#E0C45E"} from={"Checkin"} />
        </CheckinContainer>
        <ListContainer>
          <ListHeaderTextWrapper>
            <ListHeaderText>CLICK ICON FOR TIPS</ListHeaderText>
            <ListHeaderText>TAP BAR TO COMPLETE</ListHeaderText>
          </ListHeaderTextWrapper>
          <Blocker
            setShowModal={setShowModal}
            category={"social"}
            color1={"#E0C45E"}
            color2={"#E0C45E"}
          />
        </ListContainer>
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          color={"#d86f4b"}
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
  color: #e0c45e;
  font-size: 12px;
  font-weight: 900;
`;

export default CheckinSocial;
