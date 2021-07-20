/*
  Yelp reviews component

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
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
  icon: {
    width: 24,
    height: 24,
  },
  reviewer: {
    fontSize: 15,
  }
}));

const YelpReviews = ({ reviews }) => {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(true);

  useEffect(() => {
    setExpanded(true);
  }, [reviews]);

  const openPanel = () => {
    setExpanded(!expanded);
  };

  return (
    <Accordion
      expanded={expanded}
      onChange={openPanel}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="googleReviews-bh-content"
        id="googleReviews-bh-header"
      >
        <Box pb={1}>Yelp Reviews</Box>
      </AccordionSummary>
      <AccordionDetails>
        <div>
          {reviews?.map((review) => {
            const { user, time_created: time, text, rating } = review;

            const { image_url: profile_photo_url, name: author_name } = user;

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
                  <Typography className={classes.reviewer}>{author_name}</Typography>
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
                <Box pt={1} pb={1}>
                  <Divider />
                </Box>
              </div>
            );
          })}
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

YelpReviews.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default YelpReviews;
