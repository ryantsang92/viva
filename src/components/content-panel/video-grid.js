/*
  Video grid component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useEffect } from "react";
import { GridList, GridListTile, Typography, Box } from "@material-ui/core";
import MoodBadRoundedIcon from "@material-ui/icons/MoodBadRounded";
import { makeStyles } from "@material-ui/core/styles";
import VideoCardContainer from "./video-card-container";
import VideoPanelContainer from "../video-player-panel/video-player-panel-container";
import Loading from "../loading";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  loading: {
    width: "100%",
    height: "100%",
  },
});

const VideoGrid = ({ loading, videos, fetchVideos, isMobile }) => {
  const classes = useStyles();

  useEffect(() => {
    if (videos === null) {
      fetchVideos();
    }
  }, [videos]);

  return (
    <>
      {loading ? (
        <div className={classes.loading}>
          <Loading />
        </div>
      ) : (
        <>
          {videos && videos.length > 0 ? (
            <>
              {videos.map((video, index) => (
                // <GridListTile key={video.id} cols={1}>
                // <VideoCardContainer
                //   video={video}
                //   addPadding={index % 2 === 1 ? false : true}
                // />
                <VideoPanelContainer video={video} isMobile={isMobile} />
                // </GridListTile>
              ))}
            </>
          ) : (
            // <GridList
            //   cellHeight="auto"
            //   // cols={isMobile && width > 512 ? width / 256 : 2} // revisit this logic
            //   // cols={isMobile ? width / 256 : 2}
            // >
            //   {videos.map((video, index) => (
            //     <GridListTile key={video.id} cols={1}>
            //       <VideoCardContainer
            //         video={video}
            //         addPadding={index % 2 === 1 ? false : true}
            //       />
            //     </GridListTile>
            //   ))}
            // </GridList>
            <Box pt={1}>
              <Typography>
                No content found <MoodBadRoundedIcon />
              </Typography>
            </Box>
          )}
        </>
      )}
    </>
  );
};

VideoGrid.propTypes = {
  loading: PropTypes.bool,
  isMobile: PropTypes.bool,
  videos: PropTypes.array,
  fetchVideos: PropTypes.func,
};

VideoGrid.defaultProps = {
  loading: false,
  isMobile: false,
  videos: null,
  fetchVideos() {},
};

export default VideoGrid;
