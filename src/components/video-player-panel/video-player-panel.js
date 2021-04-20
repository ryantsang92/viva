/*
  Video player panel component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useState, useEffect } from "react";
import { Box, Typography, Divider, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";
import "./video-react.css";
import { Player } from "video-react";
import { SocialIcon } from "../social-icon";
import MapPinDefault from "../../assets/map-pin-default.png";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  playerBar: {
    padding: 8,
    position: "sticky",
    top: 0,
    width: "100%",
    background: "white",
    zIndex: 99,
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
  username: {
    fontSize: 20,
  },
  closeIcon: {
    cursor: "pointer",
    textAlign: "right",
    marginLeft: "auto",
    display: "flex",
    justifyContent: "flex-end",
  },
  infoContainer: {
    padding: 10,
    paddingBottom: 30,
  },
  pin: {
    // margin: "auto",
    width: 20,
    height: 24,
  },
});

const VideoPanel = ({ video, selectedLocation, clearSelectedVideo }) => {
  const classes = useStyles();
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  let isMobile = width <= 768;

  return (
    <Box className={isMobile ? classes.playerAreaMobile : classes.playerArea}>
      <Box className={classes.playerBar}>
        <Typography variant="h6">{video.title || "Test Title"}</Typography>
        <IconButton
          onClick={() => clearSelectedVideo()}
          size="small"
          className={classes.closeIcon}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <Box>
        <Player
          playsInline
          poster={video.thumbnail}
          src={video.url}
          fluid={false}
          width={isMobile ? width : 310}
          height={550}
        />
        <Box className={classes.infoContainer}>
          {video.description && (
            <Box pb={2}>
              <Typography>{video.description}</Typography>
            </Box>
          )}
          <Box display="flex" justifyContent="flex-start">
            <Box pr={1}>
              <img src={MapPinDefault} alt="city" className={classes.pin} />
            </Box>
            {selectedLocation && (
              <div>
                <Typography fontFamily="Arial">
                  {selectedLocation.address_full}
                </Typography>
                <Typography>
                  <a
                    href={selectedLocation.website}
                    target={selectedLocation.website}
                  >
                    {
                      selectedLocation.website
                        .replace(/^(?:https?:\/\/)?(?:www\.)?/i, "")
                        .split("/")[0]
                    }
                  </a>
                </Typography>
              </div>
            )}
          </Box>

          <Box pt={1} pb={1}>
            <Divider />
          </Box>
          <SocialIcon
            user={video.user}
            platform={video.user_platform}
            hw={20}
          />
        </Box>
      </Box>
    </Box>
  );
};

VideoPanel.propTypes = {
  video: PropTypes.object,
  selectedLocation: PropTypes.object,
  clearSelectedVideo: PropTypes.func,
};

VideoPanel.defaultProps = {
  video: {},
  selectedLocation: {},
  clearSelectedVideo() {},
};

export default VideoPanel;
