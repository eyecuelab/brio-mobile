import React from "react";
import { registerRootComponent } from "expo";
import App from "./src/App";
import { Provider as PaperProvider } from "react-native-paper";

export const Main = () => {
  return (
    <>
      <PaperProvider>
        <App />
      </PaperProvider>
    </>
  );
};

registerRootComponent(Main);