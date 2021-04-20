/*
  App constants

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  blockQuote: {
    paddingLeft: "15px",
  },
});

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
  const classes = useStyles();
  return (
    <>
      <Typography>
        VIVA is a social exploration platform where you can quickly and easily
        discover places to go and things to do from people like you.
      </Typography>
      <br></br>
      <Typography>
        If you ever feel like changing up your day, VIVA gets you instant access
        to a vast library of recommendations from your local community.
      </Typography>
      <br></br>
      <div className={classes.blockQuote}>
      <Typography>Stop by a #pictureperfect coffee shop</Typography>
      <Typography>Have #funwithfriends at a vineyard nearby</Typography>
      <Typography>Discover cool restaurants that are #worththehype</Typography>
      </div>
      <br></br>
      <Typography>
        VIVA uncovers all the #hiddengems for you, making your everyday fun and
        exciting.
      </Typography>
      <br></br>
      <Typography>Happy exploring!</Typography>
    </>
  );
};

export const videoSubmissionLink = "https://forms.gle/EV2iqCNSu7PrPcDw8";
