import React, { useEffect } from "react";
import { View } from "react-native";
import bg from "../../styles/ScreenStyle.js";
import SvgBrioIntro from "../../svg_assets/landing/SvgBrioIntro";
import styled, { keyframes } from "styled-components/native";
import GetStartedBtn from "./GetStartedBtn";
import SvgDotSliderGreen from "../../svg_assets/landing/SvgDotSliderGreen";
import { connect } from "react-redux";
import { useNavigation } from "@react-navigation/native";

function BrioGeneral(props) {
  const { spotifyAuthToken } = props;
  const navigation = useNavigation();

  useEffect(() => {
    if (spotifyAuthToken != null) {
      navigation.navigate("StandardNavigation");
    }
  }, [spotifyAuthToken]);

  return (
    <View style={bg.basic}>
      <DiagramContainer>
        <Graphic />
        <Slider />
      </DiagramContainer>
      <GetStartedBtn
        text="Get Started"
        textColor="#ffffff"
        backgroundColor="#94D7B5"
      />
    </View>
  );
}

const breatheAnimation = keyframes`
 0% { height: 100px; width: 100px; }
 30% { height: 400px; width: 400px; opacity: 1 }
 40% { height: 405px; width: 405px; opacity: 0.3; }
 100% { height: 100px; width: 100px; opacity: 0.6; }
`;
const Graphic = styled(SvgBrioIntro)`
  margin-top: 10%;
  flex: 1;
  max-width: 100%;
  aspect-ratio: 0.72;
  animation-name: ${breatheAnimation};
  animation-duration: 8s;
  animation-iteration-count: infinite;
`;
// const Graphic = styled(SvgBrioIntro)`
//   margin-top: 10%;
//   flex: 1;
//   max-width: 100%;
//   aspect-ratio: 0.72;
// `;

const Slider = styled(SvgDotSliderGreen)`
  flex: 1;
  max-height: 12%;
  aspect-ratio: 0.72;
`;

const DiagramContainer = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

const mapStateToProps = (state) => {
  return {
    spotifyAuthToken: state.user.code,
  };
};
const BrioGeneralConnected = connect(mapStateToProps)(BrioGeneral);
export default BrioGeneralConnected;
