import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Category from "./Category";
import CategoryList from "./CategoryList";

const Tab = createMaterialTopTabNavigator();

export default function CategoryNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Category" component={Category} />
      <Tab.Screen name="CategoryList" component={CategoryList} />
    </Tab.Navigator>
  );
}
