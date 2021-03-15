/*
  Content panel

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React from "react";
import { Card, CardContent, CardHeader, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { SafeAreaView } from "react-native";
import VideoGridContainer from "./video-grid-container";
import VideoPlayer from "./video-player";

// to-do: find a better way to style this
const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    minHeight: 550,
  },
});

const ContentPanel = () => {
  const classes = useStyles();
  return (
    <Box border={1} ml={2}>
      <Card className={classes.root} border={5}>
        <CardHeader title="Videos" />
        <CardContent>
          {/* <SafeAreaView>
            <VideoGridContainer />
          </SafeAreaView> */}
          <Box>
            <VideoPlayer />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ContentPanel;
