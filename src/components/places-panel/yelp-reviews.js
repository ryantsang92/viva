/*
  Yelp reviews component

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

const YelpReviews = ({ reviews }) => {
  const classes = useStyles();

  return (
    <>
      <Box pb={1}>Yelp Reviews</Box>
      {reviews?.map((review) => {
        const {
          user,
          time_created: time,
          text,
          rating,
        } = review;

        const {
          image_url: profile_photo_url,
          name: author_name,
        } = user;

        return (
          <div key={author_name + time}>
            <Box
              pr={1}
              display="flex"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Box pr={1}>
                <img
                  src={profile_photo_url}
                  alt={author_name}
                  className={classes.icon}
                />
              </Box>
              <Typography>{author_name}</Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="flex-start"
              alignItems="center"
              pt={1}
            >
              <StarRating stars={rating} />
              {/* <Box pl={1} fontSize={12}>
                {relative_time_description}
              </Box> */}
            </Box>
            <Box pt={1} fontSize={14}>
              {text}
            </Box>
            <Box pt={1} pb={1}>
              <Divider />
            </Box>
          </div>
        );
      })}
    </>
  );
};

YelpReviews.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default YelpReviews;