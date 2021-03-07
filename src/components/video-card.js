/*
  Video card 

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React from "react";
import GridListTile from "@material-ui/core/GridListTile";
import PropTypes from "prop-types";

const VideoCard = ({ video }) => {
  return (
    <GridListTile key={video.img} cols={1}>
      <img src={video.img} alt={video.title} />
    </GridListTile>
  );
};

VideoCard.propTypes = {
  video: PropTypes.object,
};

VideoCard.defaultProps = {
  video: {},
};

export default VideoCard;
