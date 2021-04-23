/*
  Video card component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React from "react";
import defaultVideoImage from "../../assets/default-video-thumbnail.png";
import { View, Image, StyleSheet } from "react-native";
import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 240,
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: "100%",
    cursor: "pointer",
    borderRadius: 15,
  },
});
const useStyles = makeStyles({
  title: {
    textAlign: "left",
    lineHeight: 1,
    marginTop: 8,
    fontSize: ".8rem",
  },
});

const VideoCard = ({
  video,
  addPadding,
  videoLocation,
  saveSelectedVideo,
  saveSelectedLocation,
}) => {
  const handleClick = (video) => {
    saveSelectedVideo(video);
    // if (videoLocation.id !== video.location_id) {
      saveSelectedLocation(videoLocation);
    // }
  };

  const classes = useStyles();

  return (
    <Box pr={addPadding ? 1 : 0} pb={1}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: video.thumbnail || defaultVideoImage,
          }}
          onClick={() => handleClick(video)}
          resizeMode="cover"
        />
      </View>
      <Typography className={classes.title}>
        {video.title || "Test Title"}
      </Typography>
    </Box>
  );
};

VideoCard.propTypes = {
  video: PropTypes.object,
  addPadding: PropTypes.bool,
  videoLocation: PropTypes.object,
  saveSelectedVideo: PropTypes.func,
  saveSelectedLocation: PropTypes.func,
};

VideoCard.defaultProps = {
  video: {},
  addPadding: false,
  videoLocation: null,
  saveSelectedVideo() {},
  saveSelectedLocation() {},
};

export default VideoCard;
