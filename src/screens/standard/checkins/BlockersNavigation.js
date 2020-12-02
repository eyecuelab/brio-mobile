import * as React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import DashboardMain from "./dashboard/DashboardMain";
import DashboardHome from "./dashboard/DashboardHome";
import DashboardProfile from "./dashboard/DashboardProfile";
import SvgStarIcon from "../../../svg_assets/SvgStarIcon";
import SvgHomeIcon from "../../../svg_assets/SvgHomeIcon";
import SvgProfileIcon from "../../../svg_assets/SvgProfileIcon";

const Tab = createMaterialBottomTabNavigator();

export default function BlockersNavigation() {
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
          name="profile"
          component={DashboardProfile}
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