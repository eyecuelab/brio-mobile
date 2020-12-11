import React from "react";
import { View, TouchableHighlight } from "react-native";
import { connect } from "react-redux";
import * as actions from "../../../rdx/actions";
import { List } from "react-native-paper";
import SvgStarIcon from "../../../svg_assets/SvgStarIcon";
import SvgStarIconComplete from "../../../svg_assets/SvgStarIconComplete";
import styled from "styled-components/native";
import { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } from "@env";
import { makeRedirectUri } from "expo-auth-session";

function Blocker(props) {
  const {
    dispatch,
    blockers,
    category,
    color1,
    color2,
    setShowModal,
    showModal,
    spotifyAuthToken,
  } = props;

  const catBlockers = blockers.filter(
    (blocker) => blocker.category === `${category}`
  );

  //SPOTIFY CONFIG
  // const SpotifyWebApi = require("spotify-web-api-node");
  // const spotifyConfig = {
  //   clientId: SPOTIFY_CLIENT_ID,
  //   clientSecret: SPOTIFY_CLIENT_SECRET,
  //   redirectUrl: makeRedirectUri({
  //     native: "brio-mobile://redirect",
  //   }),
  // };

  //const spotifyApi = new SpotifyWebApi(spotifyConfig);
  
  const completedBlocker = (id) => {
    const action = actions.completedBlocker(id);
    dispatch(action);
  };
  
  const getAccessTokenWatcher = (authToken) => {
    const action2 = actions.getAccessTokenWatcher(authToken)
    dispatch(action2)
  }

  const completedSuggestion = (blockerId, suggestionId) => {
    const action2 = actions.completedSuggestion(blockerId, suggestionId);
    dispatch(action2);
  };

  const callModal = () => {
    setShowModal(!showModal);
    if (spotifyAuthToken) {
      getAccessTokenWatcher(spotifyAuthToken)
      // spotifyApi.authorizationCodeGrant(spotifyAuthToken).then(
      //   (data) => {
      //     return console.log("RESPONSE", res.json(data.body));
      //   },
      //   (err) => {
      //     console.log("ERROR", err);
      //   }
      // );
    }
  };

  const displayBlockers = () => {
    return (
      <>
        {catBlockers.map((blocker) => {
          if (blocker.completedAt === null) {
            return (
              <>
                <BlockerListContainer key={blocker.id}>
                  <IconWrapper
                    underlayColor={`${color1}`}
                    onPress={() => callModal()}
                  >
                    <SvgStarIcon color1={`${color1}`} color2={`${color2}`} />
                  </IconWrapper>
                  <ListWrapper
                    activeOpacity="0.75"
                    underlayColor={color1}
                    onPress={() => {
                      completedBlocker(blocker.id);
                    }}
                  >
                    <ListText>{blocker.description}</ListText>
                  </ListWrapper>
                </BlockerListContainer>
              </>
            );
          } else {
            const uncompletedSuggestion = blocker.suggestions.find(
              (suggestion) => suggestion.completedAt === null
            );
            if (uncompletedSuggestion) {
              return (
                <BlockerListContainer key={uncompletedSuggestion.id}>
                  <IconWrapper
                    underlayColor={`${color1}`}
                    onPress={() => callModal()}
                  >
                    <SvgStarIcon color1={`${color1}`} color2={`${color2}`} />
                  </IconWrapper>
                  <ListWrapper
                    activeOpacity="0.75"
                    underlayColor={color1}
                    onPress={() => {
                      completedSuggestion(blocker.id, uncompletedSuggestion.id);
                    }}
                  >
                    <ListText>{uncompletedSuggestion.description}</ListText>
                  </ListWrapper>
                </BlockerListContainer>
              );
            }
          }
        })}
      </>
    );
  };

  const displayCompletedBlockers = () => {
    return (
      <>
        {displayDivider()}
        {catBlockers.map((blocker) => {
          if (blocker.completedAt !== null) {
            return (
              <React.Fragment key={blocker.id}>
                <TouchableHighlight
                  style={{
                    marginTop: 12,
                    marginBottom: 24,
                    backgroundColor: `${color1}`,
                    borderRadius: 25,
                  }}
                >
                  <List.Item
                    title={blocker.description}
                    titleNumberOfLines={3}
                    titleStyle={{ color: "#FFFFFF" }}
                    description={getCompletedDate(blocker)}
                    descriptionStyle={{ color: "#FFFFFF" }}
                    left={() => <SvgStarIconComplete />}
                  />
                </TouchableHighlight>
                {blocker.suggestions.map((suggestion) => {
                  return displayCompletedSuggestion(suggestion);
                })}
              </React.Fragment>
            );
          }
        })}
      </>
    );
  };

  const displayCompletedSuggestion = (suggestion) => {
    {
      if (suggestion.completedAt !== null) {
        return (
          <TouchableHighlight
            key={suggestion.id}
            style={{
              marginTop: 12,
              marginBottom: 24,
              backgroundColor: `${color1}`,
              borderRadius: 25,
            }}
          >
            <List.Item
              title={suggestion.description}
              titleNumberOfLines={3}
              titleStyle={{ color: "#FFFFFF" }}
              description={getCompletedDate(suggestion)}
              descriptionStyle={{ color: "#FFFFFF" }}
              left={() => <SvgStarIconComplete />}
            />
          </TouchableHighlight>
        );
      }
    }
  };

  const displayDivider = () => {
    const completedBlockers = blockers.find(
      (blocker) => blocker.completedAt !== null
    );
    if (completedBlockers) {
      return (
        <View
          style={{
            borderBottomColor: `${color1}`,
            borderBottomWidth: 3,
          }}
        />
      );
    }
  };

  return (
    <>
      {displayBlockers()}
      {displayCompletedBlockers()}
    </>
  );
}

const getCompletedDate = (blocker) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const completedDate = new Date(blocker.completedAt);
  const month = months[completedDate.getMonth()];
  const day = days[completedDate.getDay()];
  const date = completedDate.getDate();
  const year = completedDate.getFullYear();

  return `${day} ${month} ${date}, ${year}`;
};

const BlockerListContainer = styled.View`
  flex: 1;
  flex-direction: row;
  margin-bottom: 12px;
  align-items: center;
`;
const ListWrapper = styled.TouchableHighlight`
  justify-content: center;
  align-items: center;
  height: 50px;
  padding: 12px;
  border-radius: 15px;
`;
const ListText = styled.Text`
  font-size: 14px;
  text-align: center;
  flex-shrink: 1;
`;
const IconWrapper = styled.TouchableHighlight`
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 70px;
  margin-right: 16px;
  margin-left: 18px;
  border-radius: 25px;
`;

const mapStateToProps = (state) => {
  const blockers = state.blockersState.blockers;
  return {
    spotifyAuthToken: state.user.code,
    blockers: blockers,
  };
};
const BlockerConnected = connect(mapStateToProps)(Blocker);
export default BlockerConnected;
