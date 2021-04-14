/*
  Content panel component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React from "react";
import { Box, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";
import { SafeAreaView } from "react-native";
import VideoGridContainer from "./video-grid-container";
import PropTypes from "prop-types";

// to-do: find a better way to style this
const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    // minHeight: 550,
    height: "100%",
    marginLeft: 0,
    paddingLeft: 15,
    paddingRight: 15,
  },
  title: {
    fontWeight: "bold",
    backgroundColor: "#F2F2F2",
    display: "inline-block",
    borderRadius: 25,
    textAlign: "center",
    padding: "5px 10px 5px",
  },
});

const ContentPanel = ({
  selectedHashtag,
  selectedLocation,
  clearSelectedHashtag,
  clearSelectedLocationFilter,
}) => {
  const classes = useStyles();

  const onHashtagFilterClose = () => {
    clearSelectedHashtag();
  };

  const onLocationFilterClose = () => {
    clearSelectedLocationFilter();
  };

  return (
    <Box className={classes.root}>
      <SafeAreaView>
        {selectedHashtag && (
          <Box pt={2}>
            <div className={classes.title}>
              {selectedHashtag.hashtag}{" "}
              <IconButton onClick={onHashtagFilterClose} size="small">
                <CloseIcon />
              </IconButton>
            </div>
          </Box>
        )}
        {selectedLocation && (
          <Box pt={2}>
            <div className={classes.title}>
              {selectedLocation.name}{" "}
              <IconButton onClick={onLocationFilterClose} size="small">
                <CloseIcon />
              </IconButton>
            </div>
          </Box>
        )}
        <VideoGridContainer selectedHashtag={selectedHashtag} />
      </SafeAreaView>
    </Box>
  );
};

ContentPanel.propTypes = {
  selectedHashtag: PropTypes.object,
  selectedLocation: PropTypes.object,
  clearSelectedHashtag: PropTypes.func,
  clearSelectedLocationFilter: PropTypes.func,
};

ContentPanel.defaultProps = {
  selectedHashtag: null,
  selectedLocation: null,
  clearSelectedHashtag() {},
  clearSelectedLocationFilter() {},
};

export default ContentPanel;
