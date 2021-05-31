/*
  Star rating component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React from "react";
import { Box } from "@material-ui/core";
import { yellow } from "@material-ui/core/colors";
import StarIcon from "@material-ui/icons/Star";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import PropTypes from "prop-types";

const StarRating = ({ stars }) => {
  const buildStars = (stars) => {
    let returnNode = [];
    for (let i = 0; i < stars; i++) {
      returnNode.push(<StarIcon key={'star'+i} style={{ color: yellow[600] }} />);
    }
    for (let i = 0; i < 5 - stars; i++) {
      returnNode.push(<StarOutlineIcon key={'emptyStar'+i} style={{ color: yellow[600] }} />);
    }
    return returnNode;
  };

  return (
    <Box display="flex" justifyContent="flex-start" alignItems="center">
      {buildStars(stars)}
    </Box>
  );
};

StarRating.propTypes = {
  stars: PropTypes.number.isRequired,
};

export default StarRating;
