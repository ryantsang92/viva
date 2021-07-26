/*
  Image feed component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useState, useEffect } from "react";
import { Typography, Box, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MoodBadRoundedIcon from "@material-ui/icons/MoodBadRounded";
import { makeStyles } from "@material-ui/core/styles";
import ImageDisplayContainer from "./image-display-container";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  loading: {
    alignItems: "center",
    justifyContent: "center",
    objectFit: "cover",
    width: 300,
    height: 225,
  },
  infiniteScroll: {
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  header: {
    position: "sticky",
    top: 0,
    zIndex: 2,
    backgroundColor: "white",
    borderBottom: "1px solid #ddd",
  },
});

const ImageFeed = ({ images, closePlaceImagePanel, isMobile }) => {
  const classes = useStyles();
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (images !== null) {
      setItems(images?.slice(0, 5));
    }
  }, [images]);

  const handlePanelClose = () => {
    closePlaceImagePanel();
  };

  return (
    <>
      <Box
        pt={1}
        pb={1}
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
        className={classes.header}
      >
        {isMobile ? (
          <>
            <Box>
              <IconButton onClick={handlePanelClose} size="small">
                <ArrowBackIcon />
              </IconButton>
            </Box>
            <Box flexGrow={1}>
              <Typography align="center">Photos</Typography>
            </Box>
          </>
        ) : (
          <>
            <Box flexGrow={1}>
              <Typography>Photos</Typography>
            </Box>
            <Box>
              <IconButton onClick={handlePanelClose} size="small">
                <CloseIcon />
              </IconButton>
            </Box>
          </>
        )}
      </Box>

      {images?.length > 0 ? (
        <Box pt={2}>
          {images?.map((image, index) => (
            <div key={index}>
              <ImageDisplayContainer image={image} isMobile={isMobile} />
            </div>
          ))}
        </Box>
      ) : (
        <Box pt={1} justifyContent="center">
          <Typography align="center">
            No content found <MoodBadRoundedIcon />
          </Typography>
        </Box>
      )}
    </>
  );
};

ImageFeed.propTypes = {
  isMobile: PropTypes.bool,
  images: PropTypes.array,
  panelOpen: PropTypes.bool,
};

ImageFeed.defaultProps = {
  isMobile: false,
  images: null,
  panelOpen: false,
};

export default ImageFeed;
