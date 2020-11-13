import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { store } from "../src/rdx/store";
import LoginPage from "./screens/auth/LoginPage";
import DashboardPage from "./screens/standard/DashboardPage";
import ForgotPassword from "./screens/auth/ForgotPassword";
import SignupPage from "./screens/auth/SignupPage";
import ResetSent from "./screens/auth/ResetSent";
import TokenAuth from "./screens/auth/TokenAuth";

const RootStack = createStackNavigator();

export default function App() {
  return (
    <>
      <Provider store={store}>
        <StatusBar style="auto" />

        <NavigationContainer>
          <RootStack.Navigator>
            <RootStack.Screen name="Login" component={LoginPage} />
            <RootStack.Screen name="Dash" component={DashboardPage} />
            <RootStack.Screen name="Forgot" component={ForgotPassword} />
            <RootStack.Screen name="Signup" component={SignupPage} />
            <RootStack.Screen name="Reset" component={ResetSent} />
            <RootStack.Screen name="Token" component={TokenAuth} />
          </RootStack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
