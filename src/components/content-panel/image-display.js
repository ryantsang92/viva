/*
  Image display component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  playerArea: {
    maxWidth: 310,
    position: "relative",
  },
  playerAreaMobile: {
    width: "100%",
    position: "relative",
  },
  placePhoto: {
    width: "100%",
  },
});

const ImageDisplay = ({ image, isMobile }) => {
  const classes = useStyles();

  const { id, src } = image;

  return (
    <Box
      pb={1}
      className={isMobile ? classes.playerAreaMobile : classes.playerArea}
    >
      <img className={classes.placePhoto} src={src} alt={id} key={id} />
    </Box>
  );
};

ImageDisplay.propTypes = {
  image: PropTypes.object,
  isMobile: PropTypes.bool,
};

ImageDisplay.defaultProps = {
  image: null,
  isMobile: false,
};

export default ImageDisplay;
