/*
  Image feed component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Typography, Box, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import MoodBadRoundedIcon from "@material-ui/icons/MoodBadRounded";
import { makeStyles } from "@material-ui/core/styles";
import ImageDisplayContainer from "./image-display-container";
import Loading from "../common/loading";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  loading: {
    alignItems: "center",
    justifyContent: "center",
    objectFit: "cover",
    width: 300,
    height: 225,
  },
  infiniteScroll: {
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  header: {
    position: "sticky",
  },
});

const ImageFeed = ({ loading, images, closePlaceImagePanel, isMobile }) => {
  const classes = useStyles();
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (images !== null) {
      setItems(images?.slice(0, 5));
    }
  }, [images]);

  const fetchMoreData = () => {
    if (items?.length >= images?.length) {
      setHasMore(false);
    } else {
      setItems(
        items?.concat(images?.slice(items?.length, items?.length + 4))
      );
    }
  };

  const handlePanelClose = () => {
    closePlaceImagePanel();
  };

  const loadingComponent = (
    <div className={classes.loading}>
      <Loading />
    </div>
  );

  return (
    <>
      <Box
        p={1}
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
        borderBottom={1}
        className={classes.header}
      >
        <Box flexGrow={1}>
          <Typography>Photos</Typography>
        </Box>
        <Box>
          <IconButton onClick={handlePanelClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>
      {images?.length > 0 ? (
        <InfiniteScroll
          className={classes.infiniteScroll}
          dataLength={items?.length || 0}
          scrollThreshold={0.9}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<>{loadingComponent}</>}
          height="calc(100vh - 116px)"
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <Box pt={2}>
            {items?.map((image, index) => (
              <div key={index}>
                <ImageDisplayContainer image={image} isMobile={isMobile} />
              </div>
            ))}
          </Box>
        </InfiniteScroll>
      ) : (
        <Box pt={1} justifyContent="center">
          <Typography align="center">
            No content found <MoodBadRoundedIcon />
          </Typography>
        </Box>
      )}
    </>
  );
};

ImageFeed.propTypes = {
  loading: PropTypes.bool,
  isMobile: PropTypes.bool,
  images: PropTypes.array,
  panelOpen: PropTypes.bool,
};

ImageFeed.defaultProps = {
  loading: false,
  isMobile: false,
  images: null,
  panelOpen: false,
};

export default ImageFeed;
