import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import BlockerIntro from "./BlockerIntro";
// import BlockerExcercise from "./BlockerExcercise";
// import BlockerMusic from "./BlockerMusic";
// import BlockerConvo from "./BlockerConvo";

const Tab = createMaterialTopTabNavigator();

export default function BlockerNavigation() {
  return (
    <Tab.Navigator tabBar={() => null}>
      <Tab.Screen name="Blocker" component={BlockerIntro} />
      {/* <Tab.Screen name="Excercise" component={BlockerExcercise} />
      <Tab.Screen name="Music" component={BlockerMusic} />
      <Tab.Screen name="Convo" component={BlockerConvo} /> */}
    </Tab.Navigator>
  );
}
