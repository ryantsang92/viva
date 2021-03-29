/*
  Content panel

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React from "react";
import { Card, CardContent, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { SafeAreaView } from "react-native";
import VideoGridContainer from "./video-grid-container";

// to-do: find a better way to style this
const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    borderRadius: "15px",
  },
});

const ContentPanel = () => {
  const classes = useStyles();
  return (
    <Box border={1} ml={2} className={classes.root}>
      <Card className={classes.root} border={5}>
        <CardContent>
          <SafeAreaView>
            <VideoGridContainer />
          </SafeAreaView>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ContentPanel;
