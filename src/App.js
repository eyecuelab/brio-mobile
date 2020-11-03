import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import LoginPage from "./screens/Login.Page.js";
export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <LoginPage />
    </>
  );
}

