import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from "./screens/Login.Page.js";
import DashboardPage from "./screens/DashboardPage.js";

const RootStack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />

      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen name="Login" component={LoginPage}/>
          <RootStack.Screen name="Dash" component={DashboardPage} />
        </RootStack.Navigator>
      </NavigationContainer>

    </>
  );
}
