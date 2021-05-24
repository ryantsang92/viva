/*
  Star rating component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React from "react";
import { Box } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  image: {
    borderRadius: 15,
    objectFit: "cover",
  },
});

const StarRating = ({ stars }) => {
  const classes = useStyles();

  const buildStars = (stars) => {
    let returnNode = [];
    for (let i = 0; i < stars; i++) {
      returnNode.push(<StarIcon />);
    }
    for (let i = 0; i < 5 - stars; i++) {
      returnNode.push(<StarOutlineIcon />);
    }
    return returnNode;
  }

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
