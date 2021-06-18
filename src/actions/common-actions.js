/*
  Common actions

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

const requestOptions = {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
};

export const fetchEndpoint = (
  url,
  fetchSuccess,
  fetchError,
  fetchIsLoading,
  params = ""
) => {
  const fetchFunction = () => {
    return fetch(url + params, requestOptions).then((response) =>
      Promise.all([response, response.json()])
    );
  };

  return (dispatch) => {
    dispatch(fetchIsLoading());
    return fetchFunction().then(([response, json]) => {
      if (response.status === 200 && !json?.error_message) {
        dispatch(fetchSuccess(json));
      } else {
        dispatch(fetchError());
      }
    });
  };
};
