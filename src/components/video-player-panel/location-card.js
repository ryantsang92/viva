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
    <Card>
      <CardActionArea onClick={onCardClick}>
        <CardContent>
          <Box display="flex" alignItems="center">
            <Box>
              <Box display="flex" justifyContent="flex-start">
                <Box pr={1}>
                  <img src={MapPinDefault} alt="city" className={classes.pin} />
                </Box>
                <Typography gutterBottom variant="h6" component="h4">
                  {name}
                </Typography>
              </Box>
              <Typography variant="body2" color="textSecondary" component="p">
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
