/*
  Video player panel component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useState } from "react";
import { Box, Typography, Divider } from "@material-ui/core";
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
  locationTitle: {
    fontSize: "1em",
  },
  videoDesc: {
    fontSize: 15,
  },
  profileImg: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    border: "1px solid black",
    marginRight: 8,
  },
});

const VideoPlayerPanel = ({ video, location, placePanelMode, isMobile }) => {
  const classes = useStyles();

  const [inView, setInView] = useState(false);

  const { thumbnail, url, description, user, user_platform, date_upload } =
    video;

  return (
    <InView onChange={setInView} className={classes.inview}>
      <Box className={isMobile ? classes.playerAreaMobile : classes.playerArea}>
        <Box pt={2} pb={1} display="flex" flexDirection="row">
          <SocialIcon
            user={user}
            platform={user_platform}
            date={date_upload}
            hw={40}
          />
        </Box>
        {inView ? (
          <Player
            autoPlay
            playsInline
            muted
            loop
            preload="none"
            poster={thumbnail}
            src={url}
            fluid={false}
            width={isMobile ? "100%" : 310}
            height={isMobile ? 660 : 550}
          >
            <BigPlayButton position="center" />
            <ControlBar autoHide={false} disableDefaultControls={false}>
              <VolumeMenuButton vertical order={7.2} />
            </ControlBar>
          </Player>
        ) : (
          <div className={classes.loading}>
            <Loading />
          </div>
        )}
        <Box pt={1} pb={2}>
          {description && (
            <Box pl={2} pr={2} pb={2}>
              <Typography className={classes.videoDesc}>
                {description}
              </Typography>
            </Box>
          )}
          {!placePanelMode && (
            <LocationCardContainer location={location} />
          )}
        </Box>
      </Box>
      <Divider />
    </InView>
  );
};

VideoPlayerPanel.propTypes = {
  video: PropTypes.object,
  location: PropTypes.object,
  placePanelMode: PropTypes.bool,
  isMobile: PropTypes.bool,
};

VideoPlayerPanel.defaultProps = {
  video: null,
  location: null,
  placePanelMode: false,
  isMobile: false,
};

export default VideoPlayerPanel;
