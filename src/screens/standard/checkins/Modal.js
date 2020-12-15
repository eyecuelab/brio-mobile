import React from "react";
import {
  ImageBackground,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { connect } from "react-redux";
import brio from "../../../../assets/BrioPng.png";
import ModalContents from "./ModalContents";
export const Modal = (props) => {
  const { showModal, setShowModal, contents } = props;
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
              justifyContent: "center",
              alignItems: "center",
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
        source={brio}
        style={{
          backgroundColor: "#ffffff",
          resizeMode: "cover",
          alignItems: "center",
        }}
      >
        <ModalContents />
      </ImageBackground>
    </TouchableOpacity>
  );
};

const mapStateToProps = (state) => {
  return {
    apiEndpoint: state.spotifyApi.apiEndpoint,
    contents: state.spotifyApi.contents,
  };
};

export default connect(mapStateToProps)(Modal);
