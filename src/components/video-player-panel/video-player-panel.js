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
import MapPinDefault from "../../assets/map-pin-default.png";
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
  console.log(location);
  const classes = useStyles();

  const [inView, setInView] = useState(false);

  const { thumbnail, url, title, description, user, user_platform } = video;
  // const { address, website, name } = location;

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
          {isMobile ? (
            <Box pb={1}>
              <Box display="flex" justifyContent="flex-start">
                <Box pr={1}>
                  <img src={MapPinDefault} alt="city" className={classes.pin} />
                </Box>
                <Typography gutterBottom variant="h6" component="h4">
                  {location?.name}
                </Typography>
              </Box>
              <Box pl={2}>
                <Typography variant="body2" color="textSecondary" component="p">
                  {location?.address_full}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <a href={location?.website} target={location?.website}>
                    {
                      location?.website
                        ?.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "")
                        ?.split("/")[0]
                    }
                  </a>
                </Typography>
              </Box>
            </Box>
          ) : (
            <>
              {!placePanelMode && <LocationCardContainer location={location} />}
            </>
          )}
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
