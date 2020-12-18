import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import ModalContents from "./ModalContents";
import styled from "styled-components";
import { setStatusBarHidden } from "expo-status-bar";

export const Modal = (props) => {
  const { showModal, setShowModal, apiEndpoint, color } = props;
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
      <ContentPop
        style={
          showModal
            ? {
                flex: 1,
                flewGrow: 1,
                display: "flex",
                flexDirection: "column",
                position: "absolute",
                left: 0,
                top: 0,
                opacity: 0.8,
                backgroundColor: `${color}`,
                justifyContent: "relative",
                alignItems: "center",
                overflow: "hidden",
              }
            : {
                flex: 1,
                display: "none",
                flexDirection: "column",
                position: "absolute",
                opacity: 0.3,
                left: 0,
                top: 0,
                backgroundColor: `${color}`,
                height: 0,
                width: 0,
              }
        }
        onPress={() => setShowModal(false)}
      >
        <BlockHack />
        <InteriorContent>
          <ModalContents apiContents={apiContents} />
        </InteriorContent>
      </ContentPop>
    </>
  );
};

const BlockHack = styled.View`
  height: 25%;
`;
const ContentPop = styled.TouchableOpacity`
  height: 100%;
  width: 100%;
`;

const InteriorContent = styled.View`
  position: relative;
  background-color: rgba(255, 255, 255, 1) !important;
  border-radius: 40px;
  border: 3px black;
  margin: 3%;
`;

const mapStateToProps = (state) => {
  return {
    apiEndpoint: state.spotifyApi.apiEndpoint,
  };
};

export default connect(mapStateToProps)(Modal);
