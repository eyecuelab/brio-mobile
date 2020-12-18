import React, { useState, useEffect } from "react";
import { TouchableOpacity, useWindowDimensions } from "react-native";
import { connect } from "react-redux";
import ModalContents from "./ModalContents";

export const Modal = (props) => {
  const { showModal, setShowModal, apiEndpoint, color } = props;
  const { height, width } = useWindowDimensions();
  const [apiContents, setApiContents] = useState("");

  useEffect(() => {
    if (
      apiEndpoint === "https://api.spotify.com/v1/me/player/recently-played"
    ) {
      setApiContents("recently-played");
    } else {
      setApiContents("");
    }
    return () => {};
  }, [apiEndpoint]);

  return (
    <>
      <TouchableOpacity
        style={
          showModal
            ? {
                flex: 1,
                display: "flex",
                flexDirection: "column",
                position: "absolute",
                left: -8,
                top: -50,
                opacity: 0.9,
                backgroundColor: `${color}`,
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
                backgroundColor: `${color}`,
                height: 0,
                width: 0,
              }
        }
        onPress={() => setShowModal(false)}
      >
        <ModalContents apiContents={apiContents} />
      </TouchableOpacity>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    apiEndpoint: state.spotifyApi.apiEndpoint,
  };
};

export default connect(mapStateToProps)(Modal);
