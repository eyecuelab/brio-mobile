import * as React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import BlockerSocial from "./blockers/BlockerSocial";
import BlockerExercise from "./blockers/BlockerExercise";
import BlockerMusic from "./blockers/BlockerMusic";
import DashboardHome from "./dashboard/DashboardHome";
import AccountSettings from "./AccountSettings";

const Tab = createMaterialBottomTabNavigator();

export default function StandardNavigation() {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Feed"
        activeColor="#ECC08D"
        inactiveColor="#757272"
        barStyle={{ backgroundColor: "#FFFFFF" }}
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
          name="BlockerExercise"
          component={BlockerExercise}
          options={{
            tabBarLabel: "Social",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="group" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="BlockerMusic"
          component={BlockerMusic}
          options={{
            tabBarLabel: "Social",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="group" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="BlockerSocial"
          component={BlockerSocial}
          options={{
            tabBarLabel: "Social",
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
