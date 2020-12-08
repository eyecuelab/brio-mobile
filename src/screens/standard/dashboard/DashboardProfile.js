import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components/native";
import bg from "../../../styles/ScreenStyle";
import SvgAvatar from "../../../svg_assets/SvgAvatar";
import SvgEyeball from "../../../svg_assets/SvgEyeball";

export const DashboardProfile = () => {
  const [value, onChangeText] = useState("");
  return (
    <>
      <Container style={bg.basic}>
        <AvatarContainer>
          <SvgAvatar />
          <AvatarNameText>Kiwi</AvatarNameText>
        </AvatarContainer>

        <ListContainer>
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
        </ListContainer>

        <ListContainer>
          <UsernameInput
            onChangeText={(text) => onChangeText(text)}
            value={value}
            autoCapitalize="none"
          />
          <FieldTextContainer>
            <FieldText>CHANGE USERNAME</FieldText>
          </FieldTextContainer>
        </ListContainer>
      </Container>
    </>
  );
};

const Container = styled.View`
  flex: 1;
  height: 100%;
`;
const AvatarContainer = styled.View`
  margin-top: 64;
  align-items: center;
  justify-content: center;
`;
const AvatarNameText = styled.Text`
  margin-top: 16;
  color: #7e6200;
  font-size: 28px;
  font-weight: 900;
`;
const UsernameInput = styled.TextInput`
  width: 90%;
  height: 50;
  padding: 10px;
  border-radius: 10;
  background-color: white;
`;
const ListContainer = styled.View`
  margin-top: 24;
  margin-left: 24;
`;
const FieldTextContainer = styled.View`
  margin-top: 8;
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
  height: 55;
  padding: 10px;
  border-radius: 10;
  background-color: white;
  margin-top: 8;
`;
const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardProfile);
