/*
  Content panel

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React from "react";
import { Card, CardContent, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { SafeAreaView } from "react-native";
import VideoGridContainer from "./video-grid-container";
import PropTypes from "prop-types";

// to-do: find a better way to style this
const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    borderRadius: "15px",
  },
});

const ContentPanel = ({ selectedHashtag }) => {
  const classes = useStyles();
  return (
    <Box border={1} ml={2} className={classes.root}>
      <Card className={classes.root} border={5}>
        <CardContent>
          <SafeAreaView>
            {selectedHashtag && (
              <Typography>{selectedHashtag.hashtag}</Typography>
            )}
            <VideoGridContainer selectedHashtag={selectedHashtag} />
          </SafeAreaView>
        </CardContent>
      </Card>
    </Box>
  );
};

ContentPanel.propTypes = {
  selectedHashtag: PropTypes.object,
};

ContentPanel.defaultProps = {
  selectedHashtag: null,
};

export default ContentPanel;
