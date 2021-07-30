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
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { makeStyles } from "@material-ui/core/styles";
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
  locationAddr: {
    fontSize: 15,
    width: 250,
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
  fetchGooglePlaceData,
  saveSelectedLocation,
  clearSelectedCategory,
}) => {
  const classes = useStyles();

  const { address, g_place_id, name } = location;

  const onCardClick = () => {
    fetchGooglePlaceData(g_place_id);
    saveSelectedLocation(location);
    clearSelectedCategory();
  };

  return (
    <Card className={classes.card}>
      <CardActionArea onClick={onCardClick}>
        <CardContent className={classes.yellow}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <img src={MapPinDefault} alt="VIVA" />
            <Box pl={1}>
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
                className={classes.locationAddr}
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {address}
              </Typography>
            </Box>
            <Box pl={1}>
              <ChevronRightIcon />
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

LocationCard.propTypes = {
  location: PropTypes.object.isRequired,
  fetchGooglePlaceData: PropTypes.func,
  saveSelectedLocation: PropTypes.func,
  clearSelectedCategory: PropTypes.func,
};

LocationCard.defaultProps = {
  fetchGooglePlaceData() {},
  saveSelectedLocation() {},
  clearSelectedCategory() {},
};

export default LocationCard;
