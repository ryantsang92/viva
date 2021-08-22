/*
  Google reviews component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Divider } from "@material-ui/core";
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
  croppedImage: {
    width: 24,
    height: 24,
    position: "relative",
    overflow: "hidden",
    borderRadius: "50%",
  },
}));

const GoogleReviews = ({ reviews }) => {
  const classes = useStyles();

  const content = (
    <>
      {reviews?.map((review) => {
        const {
          profile_photo_url,
          author_name,
          rating,
          relative_time_description,
          text,
          time,
        } = review;

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
                  className={
                    profile_photo_url ? classes.icon : classes.croppedImage
                  }
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
              <Box pl={1} fontSize={12}>
                {relative_time_description}
              </Box>
            </Box>
            <Box pt={1} fontSize={14}>
              {text}
            </Box>
          </div>
        );
      })}
    </>
  );

  return (
    <CollapsiblePanel
      description={"google-reviews"}
      title={"Google Reviews"}
      content={content}
    />
  );
};

GoogleReviews.propTypes = {
  reviews: PropTypes.array,
};

GoogleReviews.defaultProps = {
  reviews: null,
};

export default GoogleReviews;
