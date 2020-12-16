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
        <Graphic />
        <Slider />
        <GetStartedBtn
          text="Get Started"
          textColor="#ffffff"
          backgroundColor="#94D7B5"
        />
      </DiagramContainer>
    </View>
  );
}

const Graphic = styled(SvgBrioIntro)`
  flex: 1;
  max-width: 100%;
  aspect-ratio: 0.84;
`;

const Slider = styled(SvgDotSliderGreen)`
  max-width: 100%;
  aspect-ratio: 0.84;
`;

const DiagramContainer = styled.View`
  flex-direction: column;
  flex-grow: 1;
`;

const mapStateToProps = (state) => {
  return {
    spotifyAuthToken: state.user.code,
  };
};
const BrioGeneralConnected = connect(mapStateToProps)(BrioGeneral);
export default BrioGeneralConnected;
