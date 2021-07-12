/*
  Place videos component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, GridList, GridListTile } from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
  video: {
    cursor: "pointer",
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      width: 0 /* Remove scrollbar space */,
      background: "transparent" /* Optional: just make scrollbar invisible */,
    },
  },
}));

const PlaceVideos = ({
  locationId,
  videos,
  fetchPlaceVidsData,
  openPlaceVideoPanel,
  closePlaceImagePanel,
}) => {
  const classes = useStyles();

  useEffect(() => {
    if (!videos) {
      fetchPlaceVidsData(locationId);
    }
  }, [locationId, videos, fetchPlaceVidsData]);

  const onVideoClick = () => {
    closePlaceImagePanel();
    openPlaceVideoPanel();
  };

  return (
    <>
      {videos && (
        <>
          <Box pb={1}>Videos</Box>
          <GridList className={classes.gridList} cols={2.5}>
            {videos?.map((video) => {
              const { thumbnail, id } = video;
              return (
                <GridListTile key={id}>
                  <img
                    src={thumbnail}
                    alt="VIVA"
                    key={id}
                    onClick={onVideoClick}
                    className={classes.video}
                  />
                </GridListTile>
              );
            })}
          </GridList>
        </>
      )}
    </>
  );
};

PlaceVideos.propTypes = {
  locationId: PropTypes.number,
  videos: PropTypes.array,
  fetchPlaceVidsData: PropTypes.func,
  openPlaceVideoPanel: PropTypes.func,
  closePlaceImagePanel: PropTypes.func,
};

PlaceVideos.defaultProps = {
  locationId: null,
  videos: null,
  fetchPlaceVidsData() {},
  openPlaceVideoPanel() {},
  closePlaceImagePanel() {},
};

export default PlaceVideos;
