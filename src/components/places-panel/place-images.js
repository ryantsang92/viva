/*
  Place images component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, GridList, GridListTile } from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
  photo: {
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

const PlaceImages = ({
  images,
  storeImages,
  openPlaceImagePanel,
  closePlaceVideoPanel,
}) => {
  const classes = useStyles();

  useEffect(() => {
    storeImages(images);
  }, [images, storeImages]);

  const onImageClick = () => {
    closePlaceVideoPanel();
    openPlaceImagePanel();
  };

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
                  <img
                    src={src}
                    alt="VIVA"
                    key={id}
                    onClick={onImageClick}
                    className={classes.photo}
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

PlaceImages.propTypes = {
  images: PropTypes.array,
  storeImages: PropTypes.func,
  openPlaceImagePanel: PropTypes.func,
  closePlaceVideoPanel: PropTypes.func,
};

PlaceImages.defaultProps = {
  images: null,
  storeImages() {},
  openPlaceImagePanel() {},
  closePlaceVideoPanel() {},
};

export default PlaceImages;
