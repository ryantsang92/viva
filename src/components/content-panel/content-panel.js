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
    marginLeft: 0,
    paddingLeft: 15,
    paddingRight: 15,
  },
  title: {
    fontWeight: "bold",
  },
});

const ContentPanel = ({ selectedHashtag }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <SafeAreaView>
        {selectedHashtag && (
          <Box className={classes.title} pt={2}>
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
