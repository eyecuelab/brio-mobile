export const signUpUserService = (request) => {
  const SIGNUP_API_ENDPOINT = "http://localhost:8080/signup";

  const parameters = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  };

  return fetch(SIGNUP_API_ENDPOINT, parameters).then((resp) => {
    return resp;
  });
};

export const confirmUserService = (token) => {
  const CONFIRM_API_ENDPOINT = "http://localhost:8080/signup";

  const parameters = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(token),
  };

  return fetch(CONFIRM_API_ENDPOINT, parameters).then((response) => {
    return response;
  });
};
