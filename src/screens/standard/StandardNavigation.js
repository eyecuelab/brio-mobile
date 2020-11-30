import * as React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import BlockerSocial from "./blockers/BlockerSocial";
import BlockerExercise from "./blockers/BlockerExercise";
import BlockerMusic from "./blockers/BlockerMusic";
import DashboardMain from "./dashboard/DashboardMain";
import DashboardHome from "./dashboard/DashboardHome";
import AccountSettings from "./dashboard/AccountSettings";
import SvgStarIcon from "../../svg_assets/SvgStarIcon";
import SvgHomeIcon from "../../svg_assets/SvgHomeIcon";
import SvgProfileIcon from "../../svg_assets/SvgProfileIcon";

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
          name="dashboardMain"
          component={DashboardMain}
          options={{
            tabBarLabel: "Main",
            tabBarIcon: ({ color }) => (
              <SvgStarIcon name="star" color={color} size={26} />
            ),
          }}
        />

        <Tab.Screen
          name="dashboardHome"
          component={DashboardHome}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <SvgHomeIcon name="group" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="BlockerExercise"
          component={BlockerExercise}
          options={{
            tabBarLabel: "Social",
            tabBarIcon: ({ color }) => (
              <SvgHomeIcon name="group" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="BlockerMusic"
          component={BlockerMusic}
          options={{
            tabBarLabel: "Social",
            tabBarIcon: ({ color }) => (
              <SvgHomeIcon name="group" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="BlockerSocial"
          component={BlockerSocial}
          options={{
            tabBarLabel: "Social",
            tabBarIcon: ({ color }) => (
              <SvgHomeIcon name="group" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="profile"
          component={AccountSettings}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color }) => (
              <SvgProfileIcon name="account" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}
