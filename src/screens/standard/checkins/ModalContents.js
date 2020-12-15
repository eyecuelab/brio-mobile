import React from "react";
import { connect } from "react-redux";
import styled from "styled-components/native";

export const ModalContents = (props) => {
  const { contents } = props;

  return (
    <>
      <ContentsContainer>
        <ContentsHeaderWrapper>
          <ContentsHeader>Kiwi's Last Album:</ContentsHeader>
        </ContentsHeaderWrapper>
        <ContentsTextWrapper>
          <ContentsText>{contents[0].track.album.name}</ContentsText>
        </ContentsTextWrapper>
      </ContentsContainer>
    </>
  );
};
const ContentsContainer = styled.View`
  margin-top: 36;
  margin-right: 12;
  margin-left: 12;
  margin-bottom: 36;
  justify-content: center;
`;
const ContentsHeaderWrapper = styled.View`
  margin: 24px;
  padding: 24px;
`;
const ContentsTextWrapper = styled.View`
  margin-bottom: 24px;
  padding: 12px;
`;
const ContentsHeader = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: 900;
  text-align: center;
  background-color: #212529;
`;
const ContentsText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 900;
  text-align: center;
  background-color: #212529;
`;
const mapStateToProps = (state) => {
  return {
    apiEndpoint: state.spotifyApi.apiEndpoint,
    contents: state.spotifyApi.contents,
  };
};
export default connect(mapStateToProps)(ModalContents);
