import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./rdx/store";
import LoginPage from "./screens/auth/LoginPage";
import DashboardPage from "./screens/standard/DashboardPage";
import ForgotPassword from "./screens/auth/ForgotPassword";
import SignupPage from "./screens/auth/SignupPage";
import ResetSent from "./screens/auth/ResetSent";
import TokenAuth from "./screens/auth/TokenAuth";
import CategoryNavigation from "./screens/onboard/categories/CategoryNavigation.js";
import SuggestionNavigation from "./screens/onboard/suggestions/SuggestionNavigation.js";
import BlockerNavigation from "./screens/onboard/blockers/BlockerNavigation.js";
import StandardNavigation from "./screens/standard/StandardNavigation.js";

const RootStack = createStackNavigator();

export default function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar style="auto" />
          <NavigationContainer>
            <RootStack.Navigator
                  screenOptions={{
                  headerShown: false
                }}
              >
              <RootStack.Screen name="Login" component={LoginPage} />
              <RootStack.Screen name="Dash" component={DashboardPage} />
              <RootStack.Screen name="Forgot" component={ForgotPassword} />
              <RootStack.Screen name="Signup" component={SignupPage} />
              <RootStack.Screen name="Reset" component={ResetSent} />
              <RootStack.Screen name="Token" component={TokenAuth} />
              <RootStack.Screen
                name="CategoryNavigation"
                component={CategoryNavigation}
              />
              <RootStack.Screen
                name="SuggestionNavigation"
                component={SuggestionNavigation}
              />
              <RootStack.Screen
                name="BlockerNavigation"
                component={BlockerNavigation}
              />
              <RootStack.Screen
                name="StandardNavigation"
                component={StandardNavigation}
              />
            </RootStack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </>
  );
}
