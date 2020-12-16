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
        <Graphic />
        <Slider />
      </DiagramContainer>
      <GetStartedBtn
        text="Get Started"
        textColor="#ffffff"
        backgroundColor="#51ADE0"
      />
    </View>
  );
}

const Graphic = styled(SvgSomethingFun)`
  flex: 1;
  max-width: 100%;
  aspect-ratio: 0.72;
`;

const Slider = styled(SvgDotSliderBlue)`
  flex: 1;
  max-height: 10%;
  aspect-ratio: 0.72;
`;

const DiagramContainer = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

export default BrioSuggestions;
