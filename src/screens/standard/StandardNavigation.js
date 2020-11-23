import * as React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import DashboardPage from "./DashboardPage";
import Profile from "../auth/Profile";

const Tab = createMaterialBottomTabNavigator();

export default function StandardNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={DashboardPage} />
      <Tab.Screen name="profile" component={Profile} />
    </Tab.Navigator>
  );
}
