import React from "react";
import { View } from "react-native";
import bg from "../../styles/ScreenStyle.js";
import SvgLetsDoThis from "../../svg_assets/landing/SvgLetsDoThis";
import styled from "styled-components/native";
import GetStartedBtn from "./GetStartedBtn";
import SvgDotSliderRed from "../../svg_assets/landing/SvgDotSliderRed.js";

function BrioSuccess() {
  return (
    <View style={bg.basic}>
      <DiagramContainer>
        <Graphic />
        <Slider />
      </DiagramContainer>
      <GetStartedBtn
        text="Get Started"
        textColor="#ffffff"
        backgroundColor="#F66A7B"
      />
    </View>
  );
}

const Graphic = styled(SvgLetsDoThis)`
  flex: 1;
  max-width: 100%;
  aspect-ratio: 0.72;
`;

const Slider = styled(SvgDotSliderRed)`
  flex: 1;
  max-height: 10%;
  aspect-ratio: 0.72;
`;

const DiagramContainer = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

export default BrioSuccess;
