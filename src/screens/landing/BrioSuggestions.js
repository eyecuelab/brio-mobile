import React from "react";
import { View } from "react-native";
import bg from "../../styles/ScreenStyle.js";
import SvgSomethingFun from "../../svg_assets/landing/SvgSomethingFun";
import styled from "styled-components/native";
import GetStartedBtn from "./GetStartedBtn";
import SvgDotSliderBlue from "../../svg_assets/landing/SvgDotSliderBlue.js";

function BrioSuggestions() {
  return (
    <View style={bg.basic}>
      <DiagramContainer>
        <Diagram>
          <SvgSomethingFun />
        </Diagram>
      </DiagramContainer>
      <GetStartedBtn
        text="Get Started"
        textColor="#ffffff"
        backgroundColor="#51ADE0"
      />
    </View>
  );
}

const DiagramContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
`;
const Diagram = styled.View`
  margin-top: 36px;
`;

export default BrioSuggestions;
