/*
  Video card 

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React from "react";
import defaultVideoImage from "../video-thumbnail.png";
import { View, Image, StyleSheet } from "react-native";
import { Typography, Box } from "@material-ui/core";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 170, // see if we can get this to display properly without hard-coding the height
    backgroundColor: "black",
  },
  image: {
    width: "100%",
    height: "100%",
    cursor: "pointer",
  },
});

const getThumbnail = (video) => {
  return video.thumbnail || defaultVideoImage;
};

const getTitle = (video) => {
  return video.title || "test title";
};

const VideoCard = ({ video, fetchSelectedVideo }) => {
  return (
    <>
      <Box>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={{
              uri: getThumbnail(video),
            }}
            onClick={() => fetchSelectedVideo(video)}
            resizeMode="cover"
          />
        </View>
      </Box>
      <Typography>{getTitle(video)}</Typography>
    </>
  );
};

VideoCard.propTypes = {
  video: PropTypes.object,
};

VideoCard.defaultProps = {
  video: {},
};

export default VideoCard;
