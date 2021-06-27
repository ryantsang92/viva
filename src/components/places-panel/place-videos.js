/*
  Place videos component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Divider } from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
  icon: {
    width: 24,
    height: 24,
  },
}));

const PlaceVideos = ({ reviews }) => {
  const classes = useStyles();

  return (
    <>
      <Box pb={1}>Place Videos</Box>
    </>
  );
};

PlaceVideos.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default PlaceVideos;
