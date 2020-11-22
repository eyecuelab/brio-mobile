import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import DashboardPage from "./DashboardPage";
import ConvoCheck from "./ConvoCheck";

const Tab = createMaterialTopTabNavigator();

export default function BlockerNavigation() {
  return (
    <Tab.Navigator tabBar={() => null}>
      <Tab.Screen name="Dashboard" component={DashboardPage} />
      <Tab.Screen name="convo" component={ConvoCheck} />
    </Tab.Navigator>
  );
}
