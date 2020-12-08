import React from 'react';
import styled from 'styled-components';

const GetStartedBtn = props => (
	<ButtonContainer
		onPress={() => alert('Hi!')}
		backgroundColor={props.backgroundColor}
	>
		<ButtonText textColor={props.textColor}>{props.text}</ButtonText>
	</ButtonContainer>
);

export default GetStartedBtn;

const ButtonContainer = styled.TouchableOpacity`
    @media (max-width: 768px) {
        flex-direction: column;
    }
    margin-left: 25px;
    margin-right: 25px;
	height: 76px;
    border-radius: 10px;
    justify-content: space-around;
	background-color: ${props => props.backgroundColor};
`;

const ButtonText = styled.Text`
    font-size: 30px;
    color: ${props => props.textColor};
	text-align: center;
`;