import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { List, Button } from "react-native-paper";
import styled from "styled-components/native";
import text from "../../../styles/TextStyle.js";
import bg from "../../../styles/ScreenStyle.js";
import Icon from "react-native-vector-icons/FontAwesome5";

function SuggestionConvo() {
  const navigation = useNavigation();
  const suggestions = [
    "Call your family once a week",
    "Text/ email your friends",
    "Join meetup",
  ];

  return (
    <View style={bg.lime}>
      <View>
        <Text style={text.header}>Conversation</Text>
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
                <Icon name="grin" size={30} color="#900" {...props} />
              )}
            />
          );
        })}
      </ListContainer>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate("BlockerNavigation")}
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

export default SuggestionConvo;
