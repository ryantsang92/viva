/*
  Content panel

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { SafeAreaView } from "react-native";
import VideoGridContainer from "./video-grid-container";
import PropTypes from "prop-types";

// to-do: find a better way to style this
const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    minHeight: 550,
    // boxShadow: "5px 0 5px -2px black",
  },
  title: {
    fontWeight: "bold",
  },
});

const ContentPanel = ({ selectedHashtag }) => {
  const classes = useStyles();
  return (
    <Box ml={1} className={classes.root}>
      <SafeAreaView>
        {selectedHashtag && (
          <Box className={classes.title} pb={2}>
            {selectedHashtag.hashtag}
          </Box>
        )}
        <VideoGridContainer selectedHashtag={selectedHashtag} />
      </SafeAreaView>
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
