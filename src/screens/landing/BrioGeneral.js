import React, { useEffect } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import bg from "../../styles/ScreenStyle.js";
import SvgBrioIntro from "../../svg_assets/landing/SvgBrioIntro"
import styled from "styled-components/native";
import GetStartedBtn from "./GetStartedBtn";
import { connect } from "react-redux";
import { useNavigation } from "@react-navigation/native"

// :D :D :D XD we dont need else
function BrioGeneral(props) {
const spotifyToken = props.spotifyToken;
const navigation = useNavigation();
    useEffect(() => {
     if (spotifyToken != null) {
        navigation.navigate("StandardNavigation");
         }
      }, [spotifyToken]);
// commit this :D
// TRY IT!!! it works!!! just  boots to dashboard

    return (
        <View style={bg.basic}>
          <DiagramContainer>
              <Diagram>
                  <SvgBrioIntro />
              </Diagram>
          </DiagramContainer>
          <GetStartedBtn text="Get Started" textColor="#ffffff" backgroundColor="#94D7B5" />
        </View>
    )
}

const DiagramContainer = styled.View`
    flex: 1;
    flex-direction: row;
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
        spotifyToken: state.user.code,
    }
}
const BrioGeneralConnected = connect(mapStateToProps)(BrioGeneral);
export default BrioGeneralConnected