/*
  App constants

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React from "react";
import { Typography } from "@material-ui/core";

export const endpoint = {
  VIDEO_URL: "http://ec2-3-23-128-254.us-east-2.compute.amazonaws.com/videos",
  HASHTAG_URL:
    "http://ec2-3-23-128-254.us-east-2.compute.amazonaws.com/hashtags",
  LOCATION_URL:
    "http://ec2-3-23-128-254.us-east-2.compute.amazonaws.com/locations",
};

export const socialURLs = {
  INSTAGRAM: "https://www.instagram.com/vivatheapp/",
  TWITTER: "https://twitter.com/vivatheapp",
  TIKTOK: "https://www.tiktok.com/@vivatheapp",
};

export const aboutText = () => {
  return (
    <>
      <Typography>Hello, welcome to VIVA!</Typography>
      <br></br>
      <Typography>
        VIVA is a social exploration platform where you can quickly and easily
        discover local experiences from people like you.
      </Typography>
      <br></br>
      <Typography>
        If you ever feel like changing up your day, VIVA gets you instant access
        to a vast library of recommendations from your local community. From a
        cute coffee shop around the corner to a picture-perfect hiking trail,
        VIVA uncovers all the local hidden gems for you.
      </Typography>
      <br></br>
      <Typography>Start exploring today!</Typography>
    </>
  );
};
