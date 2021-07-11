/*
  Image display component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useState } from "react";
import { Box, Typography, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { SocialIcon } from "../social-icon";
import CloseIcon from "@material-ui/icons/Close";
import { InView } from "react-intersection-observer";
import Loading from "../common/loading";
// import LocationCardContainer from "./location-card-container";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  header: {
    position: "sticky",
    top: 0,
    width: "100%",
    background: "white",
    zIndex: 4,
  },
  playerArea: {
    maxWidth: 310,
    position: "relative",
  },
  playerAreaMobile: {
    width: "100%",
    position: "relative",
  },
  closeIcon: {
    cursor: "pointer",
    textAlign: "right",
    marginLeft: "auto",
    display: "flex",
    justifyContent: "flex-end",
  },
  pin: {
    width: 20,
    height: 24,
  },
  loading: {
    alignItems: "center",
    justifyContent: "center",
    objectFit: "contain",
    display: "flex",
    width: 310,
    height: 550,
  },
});

const ImageDisplay = ({ image, location, closePlaceImagePanel, isMobile }) => {
  const classes = useStyles();

  const [inView, setInView] = useState(false);

  const { id, src } = image;

  const handlePanelClose = () => {
    closePlaceImagePanel();
  };

  return (
    <InView onChange={setInView}>
      <Box
        className={isMobile ? classes.playerAreaMobile : classes.playerArea}
        borderBottom={1}
      >
        {/* <Box
          p={1}
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          className={classes.header}
        >
          <IconButton onClick={handlePanelClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box> */}
        {inView ? (
          <img src={src} alt={id} key={id} />
        ) : (
          <div className={classes.loading}>
            <Loading />
          </div>
        )}
        <Box p={1} pb={4}>
          {/* {description && (
            <Box pb={2}>
              <Typography>{description}</Typography>
            </Box>
          )} */}
          {/* <LocationCardContainer location={location} /> */}
          <Box pt={1} />
          {/* <SocialIcon user={user} platform={user_platform} hw={20} /> */}
        </Box>
      </Box>
    </InView>
  );
};

ImageDisplay.propTypes = {
  image: PropTypes.object,
  location: PropTypes.object,
  isMobile: PropTypes.bool,
  closePlaceImagePanel: PropTypes.func,
};

ImageDisplay.defaultProps = {
  image: null,
  location: null,
  isMobile: false,
  closePlaceImagePanel() {},
};

export default ImageDisplay;
