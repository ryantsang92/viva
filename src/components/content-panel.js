/*
  Content panel

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { SafeAreaView } from "react-native";
import { videoData } from "../mock-data";
import VideoGrid from "./video-grid";

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
          <SafeAreaView>
            <VideoGrid videoData={videoData} />
          </SafeAreaView>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ContentPanel;
