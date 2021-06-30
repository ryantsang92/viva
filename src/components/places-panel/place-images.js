/*
  Place images component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, GridList, GridListTile } from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
  photo: {
    width: "40%",
    height: "40%",
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

const PlaceImages = ({ images }) => {
  const classes = useStyles();

  return (
    <>
      {images && (
        <>
          <Box pb={1}>Images</Box>
          <GridList className={classes.gridList} cols={2.5}>
            {images?.map((image) => {
              const { src, id } = image;
              return (
                <GridListTile key={id}>
                  <img src={src} alt="VIVA" key={id} />
                </GridListTile>
              );
            })}
          </GridList>
        </>
      )}
    </>
  );
};

PlaceImages.propTypes = {
  images: PropTypes.array,
};

PlaceImages.defaultProps = {
  images: null,
};

export default PlaceImages;
