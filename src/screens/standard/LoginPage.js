// REACT, REACT NATIVE //
import React, { useEffect } from "react";
import { Text, View, Image, Button, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import * as actions from "../../rdx/actions";
// STYLES //
import text from "../../styles/TextStyle.js";
import bg from "../../styles/ScreenStyle.js";
import brio from "../../../assets/Brio_Star.png";
import arrow from "../../styles/ArrowStyle.js";
// EXPO AUTH
import * as WebBrowser from "expo-web-browser";
import { makeRedirectUri, useAuthRequest } from "expo-auth-session";
import { SPOTIFY_CLIENT_ID } from "@env";

WebBrowser.maybeCompleteAuthSession();

const discovery = {
  authorizationEndpoint: "https://accounts.spotify.com/authorize",
  tokenEndpoint: "https://accounts.spotify.com/api/token",
};

const LoginPage = (props) => {
  const { dispatch, allBlockers } = props;
  const navigation = useNavigation();
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: SPOTIFY_CLIENT_ID ,
      scopes: ["user-read-email", "playlist-modify-public"],
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
      const action = actions.loggedIn(code);
      dispatch(action);
      navigation.navigate("StandardNavigation");
    }
  }, [response]);

  return (
    <>
      <ScrollView>
        <View style={bg.brick}>
          <Text style={text.header}>Hello, friend...</Text>
          <Image source={brio} style={{ marginTop: 100 }} />
          <Text style={text.text}>
            Brio uses Spotify's built-in credentials to access the app. You will
            need to make an account before proceeding.
          </Text>
          <View style={arrow.bottom}>
            <Button
              disabled={!request}
              title="Login"
              onPress={() => {
                promptAsync();
              }}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    allBlockers: state.blockersState.blockers,
  };
};

const LoginPageConnected = connect(mapStateToProps)(LoginPage);
export default LoginPageConnected;
