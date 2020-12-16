import React, { useEffect } from "react";
import { View } from "react-native";
import bg from "../../styles/ScreenStyle.js";
import SvgBrioIntro from "../../svg_assets/landing/SvgBrioIntro";
import styled from "styled-components/native";
import GetStartedBtn from "./GetStartedBtn";
import SvgDotSliderGreen from "../../svg_assets/landing/SvgDotSliderGreen";
import { connect } from "react-redux";
import { useNavigation } from "@react-navigation/native";

function BrioGeneral(props) {
  const spotifyAuthToken = props.spotifyAuthToken;
  const navigation = useNavigation();
  useEffect(() => {
    if (spotifyAuthToken != null) {
      navigation.navigate("StandardNavigation");
    }
  }, [spotifyAuthToken]);

  return (
    <View style={bg.basic}>
      <DiagramContainer>
        <SvgBrioIntro />
        <SvgDotSliderGreen />
        <GetStartedBtn
          text="Get Started"
          textColor="#ffffff"
          backgroundColor="#94D7B5"
        />
      </DiagramContainer>
      <SliderContainer></SliderContainer>
    </View>
  );
}

const SliderContainer = styled.View`
  flex-direction: column;
  justify-content: space-around;
`;

const DiagramContainer = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
`;
const Diagram = styled.View`
  margin-top: 36px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const mapStateToProps = (state) => {
  return {
    spotifyAuthToken: state.user.code,
  };
};
const BrioGeneralConnected = connect(mapStateToProps)(BrioGeneral);
export default BrioGeneralConnected;
