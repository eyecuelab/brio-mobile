import React from 'react';
import { Text, View } from "react-native";
import bg from "../../styles/ScreenStyle.js";
import SvgTellMeWhen from "../../svg_assets/SvgTellMeWhen";
import styled from "styled-components/native";
import GetStartedBtn from "./GetStartedBtn";

function BrioCheckIns() {
    return (
        <View style={bg.basic}>
                <DiagramContainer>
                    <Diagram>
                        <SvgTellMeWhen />
                    </Diagram>
                </DiagramContainer>
                <GetStartedBtn text="Get Started" textColor="#ffffff" backgroundColor="#B96AF6" />
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
export default BrioCheckIns