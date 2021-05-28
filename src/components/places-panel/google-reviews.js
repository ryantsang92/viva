/*
  Google reviews component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Divider } from "@material-ui/core";
import StarRating from "./star-rating";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
  icon: {
    width: 24,
    height: 24,
  },
}));

const GoogleReviews = ({ reviews }) => {
  const classes = useStyles();

  return (
    <>
      <Box pb={1}>
        <Typography>Google Reviews</Typography>
      </Box>
      {reviews.map((review) => {
        return (
          <>
            <Box
              pr={1}
              display="flex"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Box pr={1}>
                <img
                  src={review.profile_photo_url}
                  alt={review.author_name}
                  className={classes.icon}
                />
              </Box>
              <Typography>{review.author_name}</Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="flex-start"
              alignItems="center"
              pt={1}
            >
              <StarRating stars={review.rating} />
              <Box pl={1}>
                <Typography>{review.relative_time_description}</Typography>
              </Box>
            </Box>
            <Box pt={1}>
              <Typography>{review.text}</Typography>
            </Box>
            <Box pt={1} pb={1}>
              <Divider />
            </Box>
          </>
        );
      })}
    </>
  );
};

GoogleReviews.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default GoogleReviews;
