import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import bg from "../../../styles/ScreenStyle.js";
import SvgCheckinMusic from "../../../svg_assets/SvgCheckinMusic";
import Blocker from "./Blocker";
import DashBar from "../dashboard/DashBar";

export const CheckinMusic = () => {
  return (
    <ScrollView>
      <Container style={bg.mint}>
        <CheckinContainer>
          <SvgCheckinMusic />
          <DashBar category={"Music"} color={"#94D7B5"} from={"Checkin"} />
        </CheckinContainer>
        <ListContainer>
          <ListHeaderTextWrapper>
            <ListHeaderText>TAP TO COMPLETE</ListHeaderText>
            <ListHeaderText>REFRESH</ListHeaderText>
          </ListHeaderTextWrapper>
          <Blocker category={"music"} color1={"#94D7B5"} color2={"#DAF3E6"}/>
          
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
  color: #94d7b5;
  font-size: 12px;
  font-weight: 900;
`;

export default CheckinMusic;
