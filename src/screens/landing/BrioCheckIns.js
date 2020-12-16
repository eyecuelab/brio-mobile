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
      </DiagramContainer>
      <GetStartedBtn
        text="Get Started"
        textColor="#ffffff"
        backgroundColor="#B96AF6"
      />
    </View>
  );
}

const Graphic = styled(SvgTellMeWhen)`
  flex: 1;
  max-width: 100%;
  aspect-ratio: 0.72;
`;

const Slider = styled(SvgDotSliderPurple)`
  flex: 1;
  max-height: 10%;
  aspect-ratio: 0.72;
`;

const DiagramContainer = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

export default BrioCheckIns;
