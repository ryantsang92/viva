/*
  Location card component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React from "react";
import {
  Box,
  Typography,
  Card,
  CardActionArea,
  CardContent,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { makeStyles } from "@material-ui/core/styles";
import { renderMapPin } from "../../common/common-functions";
import MapPinDefault from "../../assets/map-pin-default.png";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  pin: {
    width: 20,
    height: 24,
  },
  locationTitle: {
    fontSize: 18,
    lineHeight: "1em",
  },
  locationSubtitle: {
    fontSize: 15,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  yellow: {
    background: "#f6f1d7",
    paddingLeft: 8,
  },
  card: {
    boxShadow: "none",
  },
});

const LocationCard = ({
  location,
  locationCategory,
  fetchGooglePlaceData,
  saveSelectedLocation,
  clearSelectedCategory,
}) => {
  const classes = useStyles();

  const { g_place_id, name, categories, id } = location || {};

  const onCardClick = () => {
    fetchGooglePlaceData(g_place_id);
    saveSelectedLocation(location);
    clearSelectedCategory();
  };

  return (
    <Link to={"/" + id}>
      <Card className={classes.card}>
        <CardActionArea onClick={onCardClick}>
          <CardContent className={classes.yellow}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <img
                src={categories ? renderMapPin(categories) : MapPinDefault}
                alt="VIVA"
              />
              <Box pl={1} flexGrow={1}>
                <Box
                  display="flex"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h6"
                    className={classes.locationTitle}
                  >
                    {name}
                  </Typography>
                </Box>
                <Typography
                  className={classes.locationSubtitle}
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  {locationCategory?.category}
                </Typography>
              </Box>
              <Box pl={1}>
                <ChevronRightIcon />
              </Box>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

LocationCard.propTypes = {
  location: PropTypes.object,
  locationCategory: PropTypes.object,
  fetchGooglePlaceData: PropTypes.func,
  saveSelectedLocation: PropTypes.func,
  clearSelectedCategory: PropTypes.func,
};

LocationCard.defaultProps = {
  location: {
    g_place_id: null,
    id: null,
  },
  locationCategory: null,
  fetchGooglePlaceData() {},
  saveSelectedLocation() {},
  clearSelectedCategory() {},
};

export default LocationCard;
