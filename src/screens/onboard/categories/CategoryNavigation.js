import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CategoryIntro from "./CategoryIntro";
import CategoryList from "./CategoryList";

const Tab = createMaterialTopTabNavigator();

export default function CategoryNavigation() {
  return (
    <Tab.Navigator tabBar={() => null}>
      <Tab.Screen name="Category" component={CategoryIntro} />
      <Tab.Screen name="Category List" component={CategoryList} />
    </Tab.Navigator>
  );
}
