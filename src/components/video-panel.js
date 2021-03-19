/*
  Video panel

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React from "react";
import { Card, CardContent, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ReactVideo } from "./video/react-video";

// to-do: find a better way to style this
const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    // minHeight: 550,
    // height: "100%"
  },
});

const VideoPanel = ({ video }) => {
  console.log(video);
  const classes = useStyles();
  return (
    <Box border={1}>
      <Card className={classes.root}>
        <CardContent>
          <Box>
            <ReactVideo
              src={video.url}
              poster="https://image.freepik.com/free-vector/colorful-abstract-wallpaper-design_23-2148467625.jpg"
              primaryColor="#278A6E"
              // other props
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default VideoPanel;
