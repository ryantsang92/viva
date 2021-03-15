/*
  Video panel

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React from "react";
import { Card, CardContent, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import VideoPlayer from "./video-player";

// to-do: find a better way to style this
const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    minHeight: 550,
  },
});

const VideoPanel = () => {
  const classes = useStyles();
  return (
    <Box border={1} ml={2}>
      <Card className={classes.root} border={5}>
        <CardContent>
          <Box>
            <VideoPlayer />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default VideoPanel;
