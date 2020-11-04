import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from "./screens/LoginPage.js";
import DashboardPage from "./screens/DashboardPage.js";
import ForgotPassword from "./screens/ForgotPassword.js";
import SignupPage from "./screens/SignupPage.js";

const RootStack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />

      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen name="Login" component={LoginPage}/>
          <RootStack.Screen name="Dash" component={DashboardPage} />
          <RootStack.Screen name="Forgot" component={ForgotPassword} />
          <RootStack.Screen name="Signup" component={SignupPage} />
        </RootStack.Navigator>
      </NavigationContainer>

    </>
  );
}
