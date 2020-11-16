import React from "react";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { List, Button } from "react-native-paper";
import styled from "styled-components/native";
import text from "../../../styles/TextStyle.js";
import bg from "../../../styles/ScreenStyle.js";
import brio from "../../../../assets/Brio_Star.png";
import Icon from "react-native-vector-icons/FontAwesome5";

function CategoryList() {
  const navigation = useNavigation();
  
  return (
    <View style={bg.lime}>
      <View>
        <Image source={brio} />
      </View>
      <View>
        <Text style={text.text}>
          Here's a few categories we can generate ideas from to stay motivated:
        </Text>
      </View>
      <ListContainer>
        <List.Item
          title="Conversation"
          left={(props) => (
            <Icon name="grin" size={30} color="#900" {...props} />
          )}
        />
        <List.Item
          title="Music"
          left={(props) => (
            <Icon name="music" size={30} color="#900" {...props} />
          )}
        />
        <List.Item
          title="Exercise"
          left={(props) => (
            <Icon name="running" size={30} color="#900" {...props} />
          )}
        />
      </ListContainer>
      <Button mode="outlined" onPress={() => navigation.navigate("SuggestionNavigation")}>Continue
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

export default CategoryList;
