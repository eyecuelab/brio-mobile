import React, { useState } from "react";
import { connect } from "react-redux";
import { View } from "react-native";
import styled from "styled-components/native";
import bg from "../../../styles/ScreenStyle";
import SvgAvatar from "../../../svg_assets/SvgAvatar";
import SvgEyeball from "../../../svg_assets/SvgEyeball";
import Icon from "react-native-vector-icons/FontAwesome";

export const DashboardProfile = () => {
  const [value, onChangeText] = useState("");
  return (
    <>
      <Container style={bg.basic}>
        <AvatarContainer>
          <SvgAvatar />
          <AvatarNameText>Kiwi</AvatarNameText>
        </AvatarContainer>

        <FieldContainer>
          <EyecolorView>
            <SvgEyeball style={{ justifyContent: "space-between" }} />
            <SvgEyeball />
            <SvgEyeball />
            <SvgEyeball />
            <SvgEyeball />
          </EyecolorView>
          <FieldTextContainer>
            <FieldText>EYE COLOR</FieldText>
          </FieldTextContainer>
        </FieldContainer>

        <FieldContainer>
          <UsernameInput
            onChangeText={(text) => onChangeText(text)}
            value={value}
            autoCapitalize="none"
          />
          <FieldTextContainer>
            <FieldText>CHANGE USERNAME</FieldText>
          </FieldTextContainer>
        </FieldContainer>

        <FieldContainer>
          <LogoutBtn onPress={() => console.log("LOG OUT PRESSED")}>
            <LogoutBtnText>Log out</LogoutBtnText>
          </LogoutBtn>
          <FieldTextContainer>
            <FieldText>LOG OUT OF THE APP</FieldText>
          </FieldTextContainer>
        </FieldContainer>
      </Container>
    </>
  );
};

const Container = styled.View`
  flex: 1;
  height: 100%;
`;
const AvatarContainer = styled.View`
  margin-top: 64px;
  align-items: center;
  justify-content: center;
`;
const AvatarNameText = styled.Text`
  margin-top: 16px;
  color: #7e6200;
  font-size: 28px;
  font-weight: 900;
`;
const UsernameInput = styled.TextInput`
  width: 90%;
  height: 50px;
  padding: 10px;
  border-radius: 10px;
  background-color: white;
`;
const FieldContainer = styled.View`
  margin-top: 24px;
  margin-left: 24px;
`;
const FieldTextContainer = styled.View`
  margin-top: 8px;
`;
const FieldText = styled.Text`
  color: #dea768;
  font-size: 10px;
  font-weight: 900;
`;
const EyecolorView = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  height: 55px;
  padding: 10px;
  border-radius: 10px;
  background-color: white;
  margin-top: 8px;
`;
const TextWrapper = styled.View`
  flex-direction: row;
`;

const LogoutBtn = styled.TouchableHighlight`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 55;
  padding: 10px;
  border-radius: 10px;
  background-color: #d8a1d5;
  margin-top: 8;
  text-align: center;
`;
const LogoutBtnText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: 900;
`;
const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardProfile);
