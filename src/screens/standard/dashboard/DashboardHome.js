import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import bg from "../../../styles/ScreenStyle";
import SvgBrioHome from "../../../svg_assets/SvgBrioHome";
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
          <Diagram>
            <DiagramTextHeader>Oh my gosh!</DiagramTextHeader>
            <DiagramText>This is going to be so much fun. </DiagramText>
            <DiagramText>What are we going to do today?</DiagramText>
          </Diagram>
          <SvgBrioHome />
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
  justify-content: space-around;
  margin-top: 48;
`;
const Diagram = styled.View`
  margin-top: 36;
  margin-bottom: 12;
  padding-right: 5;
  padding-left: 5;
  padding-bottom: 5;
  position: absolute;
  top: -30;
  right: 10;
  border-radius: 25px;
  background-color: #fff;
`;
const DiagramTextHeader = styled.Text`
  font-size: 30px;
  color: #51ade0;
  font-weight: 900;
  padding: 10px;
`;
const DiagramText = styled.Text`
  font-size: 16px;
  color: #51ade0;
  font-weight: 900;
  padding: 4px;
`;
const ListContainer = styled.View`
  margin-bottom: 24;
`;

export default connect()(DashboardHome);
