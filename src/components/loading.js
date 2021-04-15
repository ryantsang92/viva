/*
  Loading component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React from "react";
import loading from "../assets/loading.gif";

const Loading = () => {
  return (
    <img
      src={loading}
      alt="loading"
      style={{
        top: 10,
        width: "100%",
      }}
    />
  );
};

export default Loading;
