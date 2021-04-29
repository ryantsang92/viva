/*
  Common image component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { makeStyles } from "@material-ui/core/styles";
import defaultVideoImage from "../../assets/default-video-thumbnail.png";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  image: {
    borderRadius: 15,
  },
});

const Image = ({ alt, src, height, width, caption, onClick }) => {
  const classes = useStyles();

  return (
    <>
      <LazyLoadImage
        alt={alt}
        src={src}
        height={height}
        width={width}
        onClick={onClick}
        className={classes.image}
      />
      {caption && <span>{caption}</span>}
    </>
  );
};

Image.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  saveSelectedLocation: PropTypes.func,
};

Image.defaultProps = {
  alt: "Video",
  src: defaultVideoImage,
  height: "100%",
  width: "100%",
  caption: null,
  onClick() {},
};

export default Image;
