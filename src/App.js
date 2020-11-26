import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./rdx/store";
import LoginPage from "./screens/standard/LoginPage";
import StandardNavigation from "./screens/standard/StandardNavigation.js";
import ExerciseCheck from "./screens/standard/ExerciseCheck.js";
import MusicCheck from "./screens/standard/MusicCheck.js";
import SocialCheck from "./screens/standard/SocialCheck.js";
import LandingNavigation from "./screens/landing/LandingNavigation.js";

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
                headerShown: false,
              }}
            >
              <RootStack.Screen name="Login" component={LoginPage} />
              <RootStack.Screen name="ExerciseCheck" component={ExerciseCheck} />
              <RootStack.Screen name="MusicCheck" component={MusicCheck} />
              <RootStack.Screen name="SocialCheck" component={SocialCheck} />
              <RootStack.Screen
                name="StandardNavigation"
                component={StandardNavigation}
              />
              <RootStack.Screen
                name="LandingNavigation"
                component={LandingNavigation}
              />
            </RootStack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </>
  );
}
