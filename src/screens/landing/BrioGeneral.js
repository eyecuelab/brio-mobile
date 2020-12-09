import React, { useEffect } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import bg from "../../styles/ScreenStyle.js";
import SvgBrioIntro from "../../svg_assets/landing/SvgBrioIntro"
import styled from "styled-components/native";
import GetStartedBtn from "./GetStartedBtn";
import { connect } from "react-redux";
// EXPO AUTH
import * as WebBrowser from "expo-web-browser";
import { makeRedirectUri, useAuthRequest } from "expo-auth-session";
import { SPOTIFY_CLIENT_ID } from "@env";

function BrioGeneral(props) {
    // useEffect(() => {
    //     if (authReducer.code) {
    //       const { code } = response.params;
    //       const action = actions.loggedIn(code);
    //       dispatch(action);
    //       navigation.navigate("StandardNavigation");
    //     }
    //   }, [response]);

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


//wtf

// lol VS code be like that sometimes
// not sure
