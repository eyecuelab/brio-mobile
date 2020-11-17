import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import BlockerIntro from "./BlockerIntro";
import BlockerConvo from "./BlockerConvo";
import BlockerExercise from "./BlockerExercise";
import BlockerMusic from "./BlockerMusic";

const Tab = createMaterialTopTabNavigator();

export default function BlockerNavigation() {
  return (
    <Tab.Navigator tabBar={() => null}>
      <Tab.Screen name="Blocker" component={BlockerIntro} />
      <Tab.Screen name="Convo" component={BlockerConvo} />
      <Tab.Screen name="Excercise" component={BlockerExercise} />
      <Tab.Screen name="Music" component={BlockerMusic} />
    </Tab.Navigator>
  );
}
