import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DashboardMain from "../DashboardMain";
import CheckinExercise from "../../checkins/CheckinExercise";
import CheckinMusic from "../../checkins/CheckinMusic";
import CheckinSocial from "../../checkins/CheckinSocial";

function DashMainStackScreen() {
  const MainStack = createStackNavigator();

  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Main"
        component={DashboardMain}
        options={{ headerMode: "none", headerShown: false }}
      />
      <MainStack.Screen
        name="CheckinExercise"
        component={CheckinExercise}
        options={{ headerMode: "none", headerShown: false }}
      />
      <MainStack.Screen
        name="CheckinMusic"
        component={CheckinMusic}
        options={{ headerMode: "none", headerShown: false }}
      />
      <MainStack.Screen
        name="CheckinSocial"
        component={CheckinSocial}
        options={{ headerMode: "none", headerShown: false }}
      />
    </MainStack.Navigator>
  );
}

export default DashMainStackScreen;
