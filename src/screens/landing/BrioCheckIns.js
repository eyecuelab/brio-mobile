import React from "react";
import { View } from "react-native";
import bg from "../../styles/ScreenStyle.js";
import SvgTellMeWhen from "../../svg_assets/landing/SvgTellMeWhen";
import styled from "styled-components/native";
import GetStartedBtn from "./GetStartedBtn";
import SvgDotSliderPurple from "../../svg_assets/landing/SvgDotSliderPurple";

function BrioCheckIns() {
  return (
    <View style={bg.basic}>
      <DiagramContainer>
        <Graphic />
        <Slider />
        <GetStartedBtn
          text="Get Started"
          textColor="#ffffff"
          backgroundColor="#B96AF6"
        />
      </DiagramContainer>
    </View>
  );
}

const Graphic = styled(SvgTellMeWhen)`
  flex: 1;
  max-width: 100%;
  aspect-ratio: 0.72;
`;

const Slider = styled(SvgDotSliderPurple)`
  max-width: 100%;
  aspect-ratio: 0.72;
`;
const DiagramContainer = styled.View`
  flex-direction: column;
  flex-grow: 1;
`;

export default BrioCheckIns;
