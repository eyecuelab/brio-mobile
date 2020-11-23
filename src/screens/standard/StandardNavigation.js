import * as React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import DashboardPage from "./DashboardPage";
import ConvoCheck from "./ConvoCheck";

const Tab = createMaterialBottomTabNavigator();

export default function BlockerNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={DashboardPage} />
      <Tab.Screen name="convo" component={ConvoCheck} />
    </Tab.Navigator>
  );
}
