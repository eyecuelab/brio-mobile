import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./rdx/store";
import LoginPage from "./screens/standard/LoginPage";
import StandardNavigation from "./screens/standard/StandardNavigation.js";
import BlockerExercise from "./screens/standard/blockers/BlockerExercise.js";
import BlockerMusic from "./screens/standard/blockers/BlockerMusic.js";
import BlockerSocial from "./screens/standard/blockers/BlockerSocial.js";
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
              <RootStack.Screen name="BlockerExercise" component={BlockerExercise} />
              <RootStack.Screen name="BlockerMusic" component={BlockerMusic} />
              <RootStack.Screen name="BlockerSocial" component={BlockerSocial} />
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
