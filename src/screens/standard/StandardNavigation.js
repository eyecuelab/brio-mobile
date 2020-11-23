import * as React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import DashboardPage from "./DashboardPage";
import BlockerConvo from "../onboard/blockers/BlockerConvo";
import BlockerExercise from "../onboard/blockers/BlockerExercise";
import BlockerMusic from "../onboard/blockers/BlockerMusic";
import Profile from "../auth/Profile";

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
          component={DashboardPage}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />

        <Tab.Screen
          name="BlockerConvo"
          component={BlockerConvo}
          options={{
            tabBarLabel: "Conversation",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="group" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="BlockerExercise"
          component={BlockerExercise}
          options={{
            tabBarLabel: "Conversation",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="group" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="BlockerMusic"
          component={BlockerMusic}
          options={{
            tabBarLabel: "Conversation",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="group" color={color} size={26} />
            ),
          }}
        />

        <Tab.Screen
          name="profile"
          component={Profile}
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
