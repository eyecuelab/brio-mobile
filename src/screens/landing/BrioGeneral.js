import React from 'react';
import { View, TouchableOpacity, Text } from "react-native";
import bg from "../../styles/ScreenStyle.js";
import SvgBrioIntro from "../../svg_assets/SvgBrioIntro"
import styled from "styled-components/native";
import GetStartedBtn from "./GetStartedBtn"

function BrioGeneral() {
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
    margin-top: 36px;
`;
const Diagram = styled.View`
    margin-top: 36px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
const InteractiveContainer = styled.View`
    flex: 1
    justify-content: center;
`
const GetStarted = styled.TouchableOpacity`
    height: 76px;
    width: 288px;
    background-color: #94D7B5;
`;

export default BrioGeneral