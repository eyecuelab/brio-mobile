import React from "react";
import {
  ImageBackground,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import styled from "styled-components/native";
import { connect } from "react-redux";
import brio from "../../../../assets/BrioPng.png"

export const ModalContents = (props) => {
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
        <ContentsContainer>
          <ContentsTextWrapper>
            <ContentsHeader>Kiwi's Last Album:</ContentsHeader>
          </ContentsTextWrapper>
          <ContentsTextWrapper>
            <ContentsText>{contents[0].track.album.name}</ContentsText>
          </ContentsTextWrapper>
        </ContentsContainer>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const ContentsContainer = styled.View`
  margin-top: 36;
  margin-right: 12;
  margin-left: 12;
  margin-bottom: 36;
  justify-content: center;
`;
const ContentsTextWrapper = styled.View`
  margin: 12px;
  
`;
const ContentsHeader = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: 900;
  text-align: center;
  background-color: #000000a0;
`;
const ContentsText = styled.Text`
  color: #fff;
  font-size: 16px;
  text-align: center;
  background-color: #000000a0;
`;
const mapStateToProps = (state) => {
  return{
    contents: state.spotifyApi.contents
  }
};

export default connect(mapStateToProps)(ModalContents);
