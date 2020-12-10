import React from "react";
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { connect } from "react-redux";

export const ModalContents = (props) => {
  const { showModal, setShowModal } = props;
  const image = { uri: "https://reactjs.org/logo-og.png" };
  const { height, width } = useWindowDimensions();

  return (
    <TouchableOpacity
      style={
        showModal
          ? {
              flex: 1,
              display: "flex",
              flexDirection: "column",
              position: "absolute",
              left: 0,
              top: 0,
              opacity: 0.5,
              backgroundColor: "black",
              height,
              width,
            }
          : {
              flex: 1,
              display: "none",
              flexDirection: "column",
              position: "absolute",
              left: 0,
              top: 0,
              opacity: 0.5,
              backgroundColor: "black",
              height: 0,
              width: 0,
            }
      }
      onPress={() => setShowModal(false)}
    >
      <ImageBackground
        source={image}
        style={{
          backgroundColor: "#ffffff",
          resizeMode: "cover",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 42,
            fontWeight: "bold",
            textAlign: "center",
            backgroundColor: "#000000a0",
          }}
        >
          Hello
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(ModalContents);
