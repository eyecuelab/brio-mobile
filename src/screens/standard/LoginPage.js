import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import * as actions from "../../rdx/actions";
import bg from "../../styles/ScreenStyle.js";
import styled from "styled-components/native";
import SvgAvatar from "../../svg_assets/SvgAvatar";
import SvgEyeball from "../../svg_assets/SvgEyeball";
import SvgBrioBack from "../../svg_assets/SvgBrioBack";
import Icon from "react-native-vector-icons/FontAwesome";
import * as WebBrowser from "expo-web-browser";
import { makeRedirectUri, useAuthRequest } from "expo-auth-session";
import { SPOTIFY_CLIENT_ID } from "@env";

WebBrowser.maybeCompleteAuthSession();

const discovery = {
  authorizationEndpoint: "https://accounts.spotify.com/authorize",
  tokenEndpoint: "https://accounts.spotify.com/api/token",
};

const LoginPage = (props) => {
  const { dispatch, existingUsername, eyeBallColor } = props;
  const [username, setUsername] = useState("");
  const [eyeColor, setEyeColor] = useState("#7E6200");
  const navigation = useNavigation();
  const eyeColors = ["#51ADE0", "#5EA782", "#BDA41D", "#7E6200", "#BF2F2F"];

  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: SPOTIFY_CLIENT_ID,
      scopes: [
        "user-read-email",
        "playlist-modify-public",
        "user-read-recently-played",
      ],
      usePKCE: false,
      redirectUri: makeRedirectUri({
        native: "brio-mobile://redirect",
      }),
    },
    discovery
  );

  useEffect(() => {
    if (response?.type === "success") {
      const { code } = response.params;
      const action = actions.loggedIn(code, username, eyeColor);
      dispatch(action);
      navigation.navigate("StandardNavigation");
    }
  }, [response]);

  useEffect(() => {
    setEyeColor(eyeBallColor || eyeColor);
    return () => {};
  }, [eyeBallColor]);

  useEffect(() => {
    setUsername(existingUsername);
    return () => {};
  }, [existingUsername]);

  const usernameInputLabel = () => {
    if (!existingUsername) {
      return (
        <>
          <UsernameInput
            onChangeText={(text) => setUsername(text)}
            value={username}
            autoCapitalize="none"
          />
          <FieldTextContainer>
            <FieldText>CREATE USERNAME</FieldText>
          </FieldTextContainer>
        </>
      );
    }
  };

  const showEyeBallsField = () => {
    if (!eyeBallColor) {
      return (
        <FieldContainer>
          <EyecolorView>{showEyeBalls()}</EyecolorView>
          <FieldTextContainer>
            <FieldText>CHOOSE EYE COLOR</FieldText>
          </FieldTextContainer>
        </FieldContainer>
      );
    }
  };

  const showEyeBalls = () => {
    return eyeColors.map((color, index) => {
      return (
        <React.Fragment key={index}>
          <EyeBallWrapper onPress={() => setEyeColor(color)}>
            <SvgEyeball eyeColor={color} />
          </EyeBallWrapper>
        </React.Fragment>
      );
    });
  };

  return (
    <>
      <Container style={bg.login}>
        <ScrollView>
          <AvatarContainer>
            <SvgAvatar eyeColor={eyeColor} />
            <AvatarNameText>{username}</AvatarNameText>
          </AvatarContainer>
          {showEyeBallsField()}
          <FieldContainer>{usernameInputLabel()}</FieldContainer>

          <FieldContainer>
            <SpotifyLoginBtn onPress={() => promptAsync()}>
              <TextWrapper>
                <Icon
                  name="spotify"
                  size={22}
                  color="#fff"
                  style={{ marginRight: 20 }}
                />
                <LoginBtnText>LOGIN</LoginBtnText>
              </TextWrapper>
            </SpotifyLoginBtn>
            <FieldTextContainer>
              <FieldText>SYNC YOUR SPOTIFY</FieldText>
            </FieldTextContainer>
          </FieldContainer>
          <BrioContainer>
            <SvgBrioBack />
            <BrioText>© KD & Chee @EyeCueLab</BrioText>
          </BrioContainer>
        </ScrollView>
      </Container>
    </>
  );
};

const Container = styled.View`
  flex: 1;
  height: 100%;
`;
const AvatarContainer = styled.View`
  margin-top: 52;
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
const FieldContainer = styled.View`
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
const TextWrapper = styled.View`
  flex-direction: row;
`;
const SpotifyLoginBtn = styled.TouchableHighlight.attrs({
  underlayColor: "#1db954",
})`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 55;
  padding: 10px;
  border-radius: 10;
  background-color: #1ed760;
  margin-top: 8;
`;
const LoginBtnText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: 900;
`;
const BrioContainer = styled.View`
  margin-top: 12;
  align-items: center;
  justify-content: center;
  margin-bottom: 2%;
`;
const BrioText = styled.Text`
  color: #dea768;
  font-size: 12px;
  font-weight: 900;
`;
const EyeBallWrapper = styled.TouchableHighlight.attrs({
  underlayColor: "white",
})``;
const mapStateToProps = (state) => {
  return {
    existingUsername: state.user.username,
    eyeBallColor: state.user.eyeColor,
  };
};

const LoginPageConnected = connect(mapStateToProps)(LoginPage);
export default LoginPageConnected;
