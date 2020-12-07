import React from "react";
import { connect } from "react-redux";
import styled from "styled-components/native";
import bg from "../../../styles/ScreenStyle";
import SvgAvatar from "../../../svg_assets/SvgAvatar";

export const DashboardProfile = () => {
  return (
    <>
      <Container style={bg.basic}>
        <AvatarContainer>
          <SvgAvatar />
          <AvatarNameText>Kiwi</AvatarNameText>
        </AvatarContainer>
      </Container>
    </>
  );
};

const Container = styled.View`
  flex: 1;
  height: 100%;
`;
const AvatarContainer = styled.View`
  margin-top: 64;
  align-items: center;
  justify-content: center;
`;
const AvatarNameText = styled.Text`
  color: #7E6200;
  font-size: 28px;
  font-weight: 900;
`;

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardProfile);
