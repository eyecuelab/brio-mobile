import React from 'react';
import { Text, View } from "react-native";
import bg from "../../styles/ScreenStyle.js";
import text from "../../styles/TextStyle.js";
import SvgLetsDoThis from "../../svg_assets/SvgLetsDoThis"
import styled from "styled-components/native";
import GetStartedBtn from "./GetStartedBtn"

function BrioSuccess() {
    return (
        <View style={bg.basic}>
                <DiagramContainer>
                    <Diagram>
                        <SvgLetsDoThis />
                    </Diagram>
                </DiagramContainer>
                <GetStartedBtn text="Get Started" textColor="#ffffff" backgroundColor="#F66A7B" />
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
export default BrioSuccess