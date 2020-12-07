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

export const confirmUserService = (code) => {
  const CONFIRM_API_ENDPOINT = "http://localhost:8080/signup/confirm";

  const parameters = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(code),
  };

  return fetch(CONFIRM_API_ENDPOINT, parameters).then((resp) => {
    return resp;
  });
};

export const loginUserService = (request) => {
  const LOGIN_API_ENDPOINT = "http://localhost:8080/login";

  const parameters = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request),
  };

  return fetch(LOGIN_API_ENDPOINT, parameters).then((resp) => {
    return resp;
  });
};
