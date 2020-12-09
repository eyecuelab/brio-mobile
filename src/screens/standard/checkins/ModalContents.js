import React from "react";
import { ImageBackground, Text, View } from "react-native";
import { connect } from "react-redux";

export const ModalContents = () => {
  const image = { uri: "https://reactjs.org/logo-og.png" };

  return (
    <View style={{
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      position: 'absolute',
      left: 0,
      top: 0,
      opacity: 0.5,
      backgroundColor: 'black',
      height: 360
    }}>
      <ImageBackground source={image} style={{
        resizeMode: "cover",
        justifyContent: "center",
      }}>
        <Text style={{
          color: "white",
          fontSize: 42,
          fontWeight: "bold",
          textAlign: "center",
          backgroundColor: "#000000a0"
        }}>Hello</Text>
      </ImageBackground>
    </View>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(ModalContents);
