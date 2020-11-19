import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { List, Button } from "react-native-paper";
import styled from "styled-components/native";
import text from "../../../styles/TextStyle.js";
import bg from "../../../styles/ScreenStyle.js";
import Icon from "react-native-vector-icons/FontAwesome5";
import { connect } from "react-redux";
import * as actions from "../../../rdx/actions";

function SuggestionMusic(props) {
  const navigation = useNavigation();
  const suggestions = [
    "Listen to a new artist",
    "Listen to your entire Discover Weekly",
    "Make a playlist of 10 songs",
  ];

  const { dispatch } = props;

  const addMusic = () => {
    const action = actions.addedMusic();
    dispatch(action);
    navigation.navigate("BlockerNavigation");
  };

  return (
    <View style={bg.lime}>
      <View>
        <Text style={text.header}>Music</Text>
      </View>
      <View>
        <Text style={text.text}>Here are 3 suggestions for you</Text>
      </View>
      <ListContainer>
        {suggestions.map((suggestion) => {
          return (
            <List.Item
              key={suggestion}
              title={suggestion}
              left={(props) => (
                <Icon name="music" size={30} color="#900" {...props} />
              )}
            />
          );
        })}
      </ListContainer>
      <Button
        mode="outlined"
        onPress={() => {
          addMusic();
        }}
      >
        Continue to Blockers
      </Button>
    </View>
  );
}

const ListContainer = styled.View`
  margin-top: 36;
  margin-bottom: 36;
  margin-left: 36;
  justify-content: center;
`;

const SuggestionMusicConnected = connect()(SuggestionMusic);
export default SuggestionMusicConnected;
