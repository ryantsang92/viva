/*
  Video player panel component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useState } from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  Player,
  BigPlayButton,
  ControlBar,
  VolumeMenuButton,
} from "video-react";
import { SocialIcon } from "../social-icon";
import { InView } from "react-intersection-observer";
import Loading from "../common/loading";
import LocationCardContainer from "./location-card-container";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  playerBar: {
    padding: 8,
    position: "sticky",
    top: 0,
    width: "100%",
    background: "white",
    zIndex: 4,
    display: "flex",
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

const VideoPanel = ({ video, location, placePanelMode, isMobile }) => {
  const classes = useStyles();

  const [inView, setInView] = useState(false);

  const { thumbnail, url, title, description, user, user_platform } = video;

  return (
    <InView onChange={setInView}>
      <Box
        className={isMobile ? classes.playerAreaMobile : classes.playerArea}
        borderBottom={1}
      >
        <Box className={classes.playerBar}>
          {inView && (
            <Typography variant="h6">{title || "Test Title"}</Typography>
          )}
        </Box>
        {inView ? (
          <Player
            autoPlay
            muted
            preload="none"
            poster={thumbnail}
            src={url}
            fluid={false}
            width={isMobile ? "100%" : 310}
            height={isMobile ? 660 : 550}
          >
            <BigPlayButton position="center" />
            <ControlBar autoHide={false} disableDefaultControls={false}>
              <VolumeMenuButton vertical />
            </ControlBar>
          </Player>
        ) : (
          <div className={classes.loading}>
            <Loading />
          </div>
        )}
        <Box p={1} pb={4}>
          {description && (
            <Box pb={1}>
              <Typography>{description}</Typography>
            </Box>
          )}
          <>
            {!placePanelMode && <LocationCardContainer location={location} />}
          </>
          <Box pt={1} />
          <SocialIcon user={user} platform={user_platform} hw={20} />
        </Box>
      </Box>
    </InView>
  );
};

VideoPanel.propTypes = {
  video: PropTypes.object,
  location: PropTypes.object,
  placePanelMode: PropTypes.bool,
  isMobile: PropTypes.bool,
};

VideoPanel.defaultProps = {
  video: null,
  location: {
    address_full: null,
    website: null,
  },
  placePanelMode: false,
  isMobile: false,
};

export default VideoPanel;
