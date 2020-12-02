import React from "react";
import { View, ScrollView } from "react-native";
import styled from "styled-components/native";
import bg from "../../../styles/ScreenStyle.js";
import SvgCheckinMusic from "../../../svg_assets/SvgCheckinMusic";
import BlockerMusic from "./BlockerMusic";
import DashBar from "../dashboard/DashBar";

export const CheckinMusic = () => {
  return (
    <ScrollView>
      <View style={bg.berry}>
        <CheckinContainer>
          <SvgCheckinMusic />
          <DashBar category={"Music"} color={"#d8a1d5"} from={"BlockerMusic"} />
        </CheckinContainer>
        <ListContainer>
          <ListHeaderTextWrapper>
            <ListHeaderText>TAP TO COMPLETE</ListHeaderText>
            <ListHeaderText>REFRESH</ListHeaderText>
          </ListHeaderTextWrapper>
          <BlockerMusic />
        </ListContainer>
      </View>
    </ScrollView>
  );
};

const CheckinContainer = styled.View`
  margin-top: 36;
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

export default CheckinMusic;
