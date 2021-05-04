/*
  Video player panel component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useState } from "react";
import { Box, Typography, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./video-react.css";
import { Player } from "video-react";
import { SocialIcon } from "../social-icon";
import { InView } from "react-intersection-observer";
import Loading from "../common/loading";
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
    width: 20,
    height: 24,
  },
  loading: {
    alignItems: "center",
    justifyContent: "center",
    objectFit: "cover",
    width: 300,
    height: 225,
  },
});

const VideoPanel = ({
  video,
  selectedLocation,
  isMobile,
}) => {
  const classes = useStyles();

  const [inView, setInView] = useState(false);

  return (
    <InView onChange={setInView}>
      <Box className={isMobile ? classes.playerAreaMobile : classes.playerArea}>
        <Box className={classes.playerBar}>
          {inView && (
            <Typography variant="h6">{video.title || "Test Title"}</Typography>
          )}
        </Box>
        {inView ? (
          <Box>
            <Player
              playsInline
              autoPlay
              muted
              poster={video.thumbnail}
              src={video.url}
              fluid={false}
              width={isMobile ? "100%" : 310}
              height={isMobile ? 660 : 550}
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
        ) : (
          <div className={classes.loading}>
            <Loading />
          </div>
        )}
      </Box>
    </InView>
  );
};

VideoPanel.propTypes = {
  video: PropTypes.object,
  selectedLocation: PropTypes.object,
  isMobile: PropTypes.bool,
};

VideoPanel.defaultProps = {
  video: null,
  selectedLocation: null,
  isMobile: false,
};

export default VideoPanel;
