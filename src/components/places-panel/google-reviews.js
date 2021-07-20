/*
  Google reviews component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Box,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import StarRating from "./star-rating";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
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

  const [expanded, setExpanded] = React.useState(true);

  useEffect(() => {
    setExpanded(true);
  }, [reviews]);

  const openPanel = () => {
    setExpanded(!expanded);
  };

  return (
    <Accordion expanded={expanded} onChange={openPanel}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="googleReviews-bh-content"
        id="googleReviews-bh-header"
      >
        <Box pb={1}>Google Reviews</Box>
      </AccordionSummary>
      <AccordionDetails>
        <div>
          {reviews.map((review) => {
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
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

GoogleReviews.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default GoogleReviews;
