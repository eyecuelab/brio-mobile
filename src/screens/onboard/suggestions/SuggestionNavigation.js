import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SuggestionIntro from "./SuggestionIntro";
import SuggestionExcercise from "./SuggestionExcercise";
import SuggestionMusic from "./SuggestionMusic";
import SuggestionConvo from "./SuggestionConvo";

const Tab = createMaterialTopTabNavigator();

export default function SuggestionNavigation() {
  return (
    <Tab.Navigator tabBar={() => null}>
      <Tab.Screen name="Suggestion" component={SuggestionIntro} />
      <Tab.Screen name="Excercise" component={SuggestionExcercise} />
      <Tab.Screen name="Music" component={SuggestionMusic} />
      <Tab.Screen name="Convo" component={SuggestionConvo} />
    </Tab.Navigator>
  );
}
