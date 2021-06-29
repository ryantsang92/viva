/*
  Place videos component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import PropTypes from "prop-types";
import HorizontalScrollMenu from "../common/horizontal-scroll-menu";

const useStyles = makeStyles(() => ({
  photo: {
    width: "20%",
    height: "20%",
  },
}));

const PlaceVideos = ({ locationId, videos, fetchPlaceVidsData }) => {
  const classes = useStyles();

  useEffect(() => {
    if (!videos) {
      fetchPlaceVidsData(locationId);
    }
  }, [locationId, videos, fetchPlaceVidsData]);

  const Menu = (videos) =>
    videos?.map((el) => {
      const { thumbnail, id } = el;

      return (
        <img src={thumbnail} alt="VIVA" key={id} className={classes.photo} />
      );
    });

  return (
    <>
      <Box pb={1}>Place Videos</Box>
      <HorizontalScrollMenu data={Menu(videos)} />
    </>
  );
};

PlaceVideos.propTypes = {
  videos: PropTypes.array,
  fetchPlaceVidsData: PropTypes.func,
};

PlaceVideos.defaultProps = {
  videos: null,
  fetchPlaceVidsData() {},
};

export default PlaceVideos;
