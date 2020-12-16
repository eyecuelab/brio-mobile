import React from "react";
import { Text, View } from "react-native";
import bg from "../../styles/ScreenStyle.js";
import text from "../../styles/TextStyle.js";
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
        <GetStartedBtn
          text="Get Started"
          textColor="#ffffff"
          backgroundColor="#F66A7B"
        />
      </DiagramContainer>
    </View>
  );
}

const Graphic = styled(SvgLetsDoThis)`
  flex: 1;
  max-width: 100%;
  aspect-ratio: 0.84;
`;

const Slider = styled(SvgDotSliderRed)`
  max-width: 100%;
  aspect-ratio: 0.84;
`;

const DiagramContainer = styled.View`
  flex-direction: column;
  flex-grow: 1;
`;

export default BrioSuccess;
