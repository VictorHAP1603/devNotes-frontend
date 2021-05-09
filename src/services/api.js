const API_URL = "http://localhost:3333";

export const GET_NOTES = () => {
  return {
    url: API_URL + "/annotations",
  };
};

export const POST_NOTES = (body) => {
  return {
    url: API_URL + "/annotations",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
};
