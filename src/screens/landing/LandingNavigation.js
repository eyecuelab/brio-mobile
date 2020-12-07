import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import BrioGeneral from "./BrioGeneral";
import BrioCheckIns from "./BrioCheckIns";
import BrioSuccess from "./BrioSuccess"
import BrioSuggestions from "./BrioSuggestions"


const Tab = createMaterialTopTabNavigator();

export default function LandingNavigation() {
  return (
    <>
        <Tab.Navigator tabBar={() => null}>
        <Tab.Screen
          name="general"
          component={BrioGeneral}
        />

        <Tab.Screen
          name="suggestions"
          component={BrioSuggestions}
        />

        <Tab.Screen
          name="checkins"
          component={BrioCheckIns}
        />

        <Tab.Screen
          name="success"
          component={BrioSuccess}
        />
      </Tab.Navigator>
    </>
  );
}
