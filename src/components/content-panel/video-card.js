/*
  Video card 

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
    height: 240, // see if we can get this to display properly without hard-coding the height
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
  },
});

const VideoCard = ({ video, videoLocation, saveSelectedVideo, saveSelectedLocation }) => {
  const handleClick = (video) => {
    saveSelectedVideo(video);
    saveSelectedLocation(videoLocation);
  };

  const classes = useStyles();

  return (
    <>
      <Box>
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
    </>
  );
};

VideoCard.propTypes = {
  video: PropTypes.object,
  videoLocation: PropTypes.array,
  saveSelectedVideo: PropTypes.func,
  saveSelectedLocation: PropTypes.func,
};

VideoCard.defaultProps = {
  video: {},
  videoLocation: null,
  saveSelectedVideo() {},
  saveSelectedLocation() {},
};

export default VideoCard;
