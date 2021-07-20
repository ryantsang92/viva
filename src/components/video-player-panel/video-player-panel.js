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
  locationTitle: {
    fontSize: "1em"
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
  userhandle: {
    fontSize: 15,
  },
  videoDate: {
    fontSize: 13,
    color: "#555"
  }
});

const VideoPanel = ({ video, location, placePanelMode, isMobile }) => {
  const classes = useStyles();

  const [inView, setInView] = useState(false);

  const { thumbnail, url, description, user, user_platform } = video;

  return (
    <InView onChange={setInView} className={classes.inview}>
      <Box
        className={isMobile ? classes.playerAreaMobile : classes.playerArea}
      >
        <Box pt={2} pb={1} display="flex" flexDirection="row">
          <Box className={classes.profileImg}></Box>
          <Box display="flex" flexDirection="column">
            <Typography className={classes.userhandle}>{user}</Typography>
            <Typography className={classes.videoDate}>July 1st, 2021</Typography>
          </Box>
        </Box>
        {inView ? (
          <Player
            autoPlay
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
        <Box pt={1} pb={4}>
          {description && (
            <Box pl={2} pr={2}>
              <Typography className={classes.videoDesc}>{description}</Typography>
            </Box>
          )}
          <Box pt={0} pb={1} pl={2}>
            <SocialIcon user={user} platform={user_platform} hw={20} />
          </Box>
          {!placePanelMode && <LocationCardContainer location={location} />}
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
