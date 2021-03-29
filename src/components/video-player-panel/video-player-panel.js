/*
  Video panel

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React from "react";
import { Card, CardContent, Box, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";
import ReactVideo from "./video-player/react-video";

// to-do: find a better way to style this
const useStyles = makeStyles({
  playerArea: {
    maxWidth: 500,
    borderRadius: "15px"
  },
  closeIcon: {
    cursor: "pointer",
    textAlign: "left",
    display: 'flex',
    justifyContent: 'flex-start',
  },
  roundedCorners: {
    borderRadius: "15px"
  }
});

const VideoPanel = ({ video, clearSelectedVideo }) => {
  console.log("VideoPanel");
  console.log(video);
  const classes = useStyles();
  return (
    <Box border={1} className={classes.roundedCorners}>
      <Card className={classes.playerArea}>
        <CardContent>
          <Box pb={1}>
            <CloseIcon
              className={classes.closeIcon}
              onClick={() => clearSelectedVideo()}
            />
          </Box>
          <Box>
            <ReactVideo
              src={video.url}
              poster={video.thumbnail}
              primaryColor="#278A6E"
              // autoPlay
            />
            <Typography>{video.title}</Typography>
            <Typography>{video.description}</Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default VideoPanel;
