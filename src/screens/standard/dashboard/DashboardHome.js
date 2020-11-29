import React from "react";
import { Text, View } from "react-native";
import Svg from "react-native-svg";
import { connect } from "react-redux";
import bg from "../../../styles/ScreenStyle";
import SvgBrioHome from "../../../svg_assets/SvgBrioHome";
import styled from "styled-components/native";

export const DashboardHome = (props) => {
  const { allBlockers } = props;

  return (
    <>
      <View style={bg.basic}>
        <DiagramContainer>
          <SvgBrioHome />
          <Diagram>
            <DiagramTextHeader>Oh my gosh!</DiagramTextHeader>
            <DiagramText>This is going to be su much fun. </DiagramText>
            <DiagramText>What are we going to do today?</DiagramText>
          </Diagram>
        </DiagramContainer>
      </View>
    </>
  );
};

const DiagramContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  margin-top: 28;
`;
const Diagram = styled.View`
  margin-top: 28;
`;
const DiagramTextHeader = styled.Text`
  font-size: 35px;
  color: #51ade0;
  font-weight: 900;
`;
const DiagramText = styled.Text`
  font-size: 18px;
  color: #51ade0;
  font-weight: 900;
`;

const mapStateToProps = (state) => {
  return {
    allBlockers: state.blockersState.blockers,
  };
};

export default connect(mapStateToProps)(DashboardHome);
