/*
  Yelp reviews component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Box,
  Divider,
} from "@material-ui/core";
import StarRating from "./star-rating";
import CollapsiblePanel from "../common/collapsible-panel";
import DefaultProfilePic from "../../assets/default-profile-pic.png";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
  icon: {
    width: 24,
    height: 24,
  },
  reviewer: {
    fontSize: 15,
  },
}));

const YelpReviews = ({ reviews }) => {
  const classes = useStyles();

  const content = (<div>
    {reviews?.map((review) => {
      const { user, time_created: time, text, rating } = review;

      const { image_url: profile_photo_url, name: author_name } = user;

      return (
        <div key={author_name + time}>
          <Box pt={1} pb={1}>
            <Divider />
          </Box>
          <Box
            pr={1}
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Box pr={1}>
              <img
                src={profile_photo_url || DefaultProfilePic}
                alt={author_name}
                className={classes.icon}
              />
            </Box>
            <Typography className={classes.reviewer}>
              {author_name}
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            pt={1}
          >
            <StarRating stars={rating} />
          </Box>
          <Box pt={1} fontSize={14}>
            {text}
          </Box>
        </div>
      );
    })}
  </div>)

  return (
    <CollapsiblePanel
      description={"yelp-reviews"}
      title={"Yelp Reviews"}
      content={content}
    />
  );
};

YelpReviews.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default YelpReviews;
