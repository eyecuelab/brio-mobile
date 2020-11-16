import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SuggestionIntro from "./SuggestionIntro";
// import SuggestionExercise from "./SuggestionExercise";
// import SuggestionMusic from "./SuggestionMusic";
// import SuggestionConvo from "./SuggestionConvo";

const Tab = createMaterialTopTabNavigator();

export default function SuggestionNavigation() {
  return (
    <Tab.Navigator tabBar={() => null}>
      <Tab.Screen name="Suggestion" component={SuggestionIntro} />
      {/* <Tab.Screen name="Exercise" component={SuggestionExercise} />
      <Tab.Screen name="Music" component={SuggestionMusic} />
      <Tab.Screen name="Convo" component={SuggestionConvo} /> */}
    </Tab.Navigator>
  );
}
