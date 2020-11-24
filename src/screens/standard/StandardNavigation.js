import * as React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import DashboardHome from "./DashboardHome";
import ConvoCheck from "./ConvoCheck";
import AccountSettings from "./AccountSettings";

const Tab = createMaterialBottomTabNavigator();

export default function StandardNavigation() {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Feed"
        activeColor="#B96AF6"
        inactiveColor="#757272"
        barStyle={{ backgroundColor: "#fff" }}
      >
        <Tab.Screen
          name="dashboard"
          component={DashboardHome}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />

        <Tab.Screen
          name="conveCheck"
          component={ConvoCheck}
          options={{
            tabBarLabel: "Category",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="group" color={color} size={26} />
            ),
          }}
        />

        <Tab.Screen
          name="profile"
          component={AccountSettings}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}
