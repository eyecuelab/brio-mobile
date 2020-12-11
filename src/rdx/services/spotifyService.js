import { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } from "@env";

const SpotifyWebApi = require("spotify-web-api-node");

const spotifyConfig = {
  clientId: SPOTIFY_CLIENT_ID,
  clientSecret: SPOTIFY_CLIENT_SECRET,
  redirectUrl: makeRedirectUri({
    native: "brio-mobile://redirect",
  }),
};

const spotifyApi = new SpotifyWebApi(spotifyConfig);

spotifyApi.authorizationCodeGrant(spotifyAuthToken).then(
  (data) => {
    return console.log("RESPONSE", res.json(data.body));
  },
  (err) => {
    console.log("ERROR", err);
  }
);

//im hoping we can call multiple api here if this succeeds :D
//nice, should work! just gonna have to kick the tires a bunch
//throw a few hammers etc
//also i am down to work through the weekend if there's some good time
//meant to say that earlier
//carmen is gone... need distractions @_@