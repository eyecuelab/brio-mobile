import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import bg from "../../../styles/ScreenStyle.js";
import SvgCheckinSocial from "../../../svg_assets/SvgCheckinSocial";
import BlockerSocial from "./BlockerSocial";
import DashBar from "../dashboard/DashBar";

export const CheckinSocial = () => {
  return (
    <ScrollView>
      <Container style={bg.citrus} >
        <CheckinContainer>
          <SvgCheckinSocial />
          <DashBar category={"Social"} color={"#E0C45E"} from={"Checkin"} />
        </CheckinContainer>
        <ListContainer>
          <ListHeaderTextWrapper>
            <ListHeaderText>TAP TO COMPLETE</ListHeaderText>
            <ListHeaderText>REFRESH</ListHeaderText>
          </ListHeaderTextWrapper>
          <BlockerSocial />
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
  color: #e0c45e;
  font-size: 12px;
  font-weight: 900;
`;

export default CheckinSocial;
