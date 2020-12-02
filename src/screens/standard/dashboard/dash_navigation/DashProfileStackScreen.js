import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DashboardProfile from "../DashboardProfile";
import CheckinExercise from "../../checkins/CheckinExercise";
import CheckinMusic from "../../checkins/CheckinMusic";
import CheckinSocial from "../../checkins/CheckinSocial";

function DashProfileStackScreen() {
  const ProfileStack = createStackNavigator();

  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={DashboardProfile}
        options={{ headerMode: "none", headerShown: false }}
      />
      <ProfileStack.Screen
        name="CheckinExercise"
        component={CheckinExercise}
        options={{ headerMode: "none", headerShown: false }}
      />
      <ProfileStack.Screen
        name="CheckinMusic"
        component={CheckinMusic}
        options={{ headerMode: "none", headerShown: false }}
      />
      <ProfileStack.Screen
        name="CheckinSocial"
        component={CheckinSocial}
        options={{ headerMode: "none", headerShown: false }}
      />
    </ProfileStack.Navigator>
  );
}

export default DashProfileStackScreen;