import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import bg from "../../../styles/ScreenStyle";
import SpinningBrio from "../../../svg_assets/animations/SpinningBrio";
import SvgExercise from "../../../svg_assets/SvgExercise";
import SvgArrowExercise from "../../../svg_assets/SvgArrowExercise";
import SvgMusic from "../../../svg_assets/SvgMusic";
import SvgArrowMusic from "../../../svg_assets/SvgArrowMusic";
import SvgSocial from "../../../svg_assets/SvgSocial";
import SvgArrowSocial from "../../../svg_assets/SvgArrowSocial";
import styled from "styled-components/native";
import DashList from "./DashList";

export const DashboardHome = () => {
  return (
    <>
      <View style={bg.basic}>
        <DiagramContainer>
          <TextBox>
            <DiagramHeader>Oh my gosh!</DiagramHeader>
            <DiagramText>This is going to be so much fun. </DiagramText>
            <DiagramText>What are we going to do today?</DiagramText>
          </TextBox>
          <SpinningBrio />
        </DiagramContainer>
        <ListContainer>
          <DashList
            category={"Exercise"}
            color={"#d8a1d5"}
            image={<SvgExercise />}
            arrow={<SvgArrowExercise />}
          />
          <DashList
            category={"Music"}
            color={"#94D7B5"}
            image={<SvgMusic />}
            arrow={<SvgArrowMusic />}
          />
          <DashList
            category={"Social"}
            color={"#E0C45E"}
            image={<SvgSocial />}
            arrow={<SvgArrowSocial />}
          />
        </ListContainer>
      </View>
    </>
  );
};

const DiagramContainer = styled.View`
  flex: 1;
  flex-flow: row;
  justify-content: center;
  margin-top: 28px;
`;
const TextBox = styled.View`
  background-color: #ffffff;
  position: absolute;
  border-radius: 25px;
  padding: 12px;
  right: 10;
  top: 20;
  border: 3px #cda000;
`;
const DiagramHeader = styled.Text`
  font-size: 30px;
  color: #51ade0;
  font-weight: 900;
  padding: 10px;
`;
const DiagramText = styled.Text`
  font-size: 16px;
  color: #51ade0;
  font-weight: 900;
  padding: 5px;
`;
const ListContainer = styled.View`
  margin-bottom: 24;
`;

export default connect()(DashboardHome);
