import React from 'react';
import { View, TouchableOpacity, Text } from "react-native";
import bg from "../../styles/ScreenStyle.js";
import SvgBrioIntro from "../../svg_assets/landing/SvgBrioIntro"
import styled from "styled-components/native";
import GetStartedBtn from "./GetStartedBtn";

function BrioGeneral() {
    // in useEffect run the promptAsync() to check if user has token already
    // if it has code(token) add navigation to DashboardHome 
    // if not show landing pages as is

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

export default BrioGeneral