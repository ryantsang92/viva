/*
  Image display component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useState } from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { InView } from "react-intersection-observer";
import Loading from "../common/loading";
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

const ImageDisplay = ({ image, location, isMobile }) => {
  const classes = useStyles();

  const [inView, setInView] = useState(false);

  const { id, src } = image;

  return (
    <InView onChange={setInView}>
      <Box
        pt={1}
        pb={1}
        className={isMobile ? classes.playerAreaMobile : classes.playerArea}
        borderBottom={1}
      >
        {inView ? (
          <img src={src} alt={id} key={id} />
        ) : (
          <div className={classes.loading}>
            <Loading />
          </div>
        )}
      </Box>
    </InView>
  );
};

ImageDisplay.propTypes = {
  image: PropTypes.object,
  location: PropTypes.object,
  isMobile: PropTypes.bool,
};

ImageDisplay.defaultProps = {
  image: null,
  location: null,
  isMobile: false,
};

export default ImageDisplay;
