import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../../rdx/actions";
import styled from "styled-components/native";
import bg from "../../../styles/ScreenStyle";
import SvgAvatar from "../../../svg_assets/SvgAvatar";
import SvgEyeball from "../../../svg_assets/SvgEyeball";
import { useNavigation } from "@react-navigation/native";

export const DashboardProfile = (props) => {
  const { dispatch, code, username } = props;
  const [value, onChangeText] = useState("");
  const [eyeColor, setEyeColor] = useState("#7E6200");
  const navigation = useNavigation();
  const eyeColors = [
    { eyeColor: "#51ADE0" },
    { eyeColor: "#5EA782" },
    { eyeColor: "#BDA41D" },
    { eyeColor: "#7E6200" },
    { eyeColor: "#BF2F2F" },
  ];

  useEffect(() => {
    if (code === null) {
      navigation.navigate("general");
    }
  }, [code]);

  const logoutButton = () => {
    const action = actions.logoutButton();
    dispatch(action);
  };

  const changedUsername = (username) => {
    const action2 = actions.changedUsername(username);
    dispatch(action2);
  };

  const showUsername = () => {
    if (value) {
      return (
        <>
          <AvatarNameText>{value}</AvatarNameText>
        </>
      );
    } else {
      return (
        <>
          <AvatarNameText>{username}</AvatarNameText>
        </>
      );
    }
  };

  const showEyeBalls = () => {
    return eyeColors.map((color) => {
      return (
        <EyeBallWrapper onPress={() => setEyeColor(color.eyeColor)}>
          <SvgEyeball eyeColor={color.eyeColor} />
        </EyeBallWrapper>
      );
    });
  };

  return (
    <>
      <Container style={bg.basic}>
        <AvatarContainer>
          <SvgAvatar eyeColor={eyeColor} />
          {showUsername()}
        </AvatarContainer>

        <FieldContainer>
          <FieldTextContainer>
            <FieldText>CHOOSE EYE COLOR</FieldText>
          </FieldTextContainer>
          <EyecolorView>{showEyeBalls()}</EyecolorView>
          <SaveEyeColorBtn
            onPress={() => console.log("save eye color pressed")}
          >
            <BtnText>Save eye color</BtnText>
          </SaveEyeColorBtn>
        </FieldContainer>

        <FieldContainer>
          <FieldTextContainer>
            <FieldText>CHANGE USERNAME</FieldText>
          </FieldTextContainer>
          <UsernameInput
            onChangeText={(text) => onChangeText(text)}
            placeholder={username}
            value={value}
            autoCapitalize="none"
          />
          <SaveUsernameBtn onPress={() => changedUsername(value)}>
            <BtnText>Save username</BtnText>
          </SaveUsernameBtn>
        </FieldContainer>

        <FieldContainer>
          <FieldTextContainer>
            <FieldText>LOG OUT OF THE APP</FieldText>
          </FieldTextContainer>
          <LogoutBtn onPress={() => logoutButton()}>
            <BtnText>Log out</BtnText>
          </LogoutBtn>
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
  margin-top: 5px;
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
const SaveUsernameBtn = styled.TouchableHighlight`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 55;
  padding: 10px;
  border-radius: 10px;
  background-color: #e0c45e;
  margin-top: 8;
  text-align: center;
`;
const SaveEyeColorBtn = styled.TouchableHighlight`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 55;
  padding: 10px;
  border-radius: 10px;
  background-color: #94d7b5;
  margin-top: 8;
  text-align: center;
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
const BtnText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: 900;
`;
const EyeBallWrapper = styled.TouchableHighlight.attrs({
  underlayColor: "white",
})``;

const mapStateToProps = (state) => {
  return {
    code: state.user.code,
    username: state.user.username,
  };
};

const DashboardProfileConnected = connect(mapStateToProps)(DashboardProfile);
export default DashboardProfileConnected;
