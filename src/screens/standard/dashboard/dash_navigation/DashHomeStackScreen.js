import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DashboardHome from "../DashboardHome";
import CheckinExercise from "../../checkins/CheckinExercise";
import CheckinMusic from "../../checkins/CheckinMusic";
import CheckinSocial from "../../checkins/CheckinSocial";

function DashHomeStackScreen() {
  const HomeStack = createStackNavigator();

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={DashboardHome}
        options={{ headerMode: "none", headerShown: false }}
      />
      <HomeStack.Screen
        name="CheckinExercise"
        component={CheckinExercise}
        options={{ headerMode: "none", headerShown: false }}
      />
      <HomeStack.Screen
        name="CheckinMusic"
        component={CheckinMusic}
        options={{ headerMode: "none", headerShown: false }}
      />
      <HomeStack.Screen
        name="CheckinSocial"
        component={CheckinSocial}
        options={{ headerMode: "none", headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}

export default DashHomeStackScreen;
