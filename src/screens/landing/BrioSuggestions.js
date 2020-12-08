import React from 'react';
import { View } from "react-native";
import bg from "../../styles/ScreenStyle.js";
import SvgSomethingFun from "../../svg_assets/SvgSomethingFun"
import styled from "styled-components/native";
import GetStartedBtn from "./GetStartedBtn";

function BrioSuggestions() {
    return (
        <View style={bg.basic}>
                <DiagramContainer>
                    <Diagram>
                        <SvgSomethingFun />
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
export default BrioSuggestions