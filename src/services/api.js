const API_URL = process.env.REACT_APP_API_URL;

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

export const REMOVE_NOTE = (id) => {
  return {
    url: API_URL + `/annotations/${id}`,
    options: {
      method: "DELETE",
    },
  };
};

export const CHANGE_PRIORITY = (id) => {
  return {
    url: API_URL + `/priorities/${id}`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    },
  };
};

export const FILTER_NOTES = (type) => {
  return {
    url: API_URL + `${!type ? "/priorities" : `/priorities?priority=${type}`}`,
  };
};

export const UPDATE_NOTE_VALUE = (id, newNote) => {
  return {
    url: API_URL + `/content-notes/${id}`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newNote),
    },
  };
};
