/*
  Places panel component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Box,
  Divider,
  IconButton,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@material-ui/core";
import { apiKeys } from "../../app-constants";
import GoogleReviews from "./google-reviews";
import MapPinDefault from "../../assets/map-pin-default.png";
import ScheduleIcon from "@material-ui/icons/Schedule";
import CloseIcon from "@material-ui/icons/Close";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LaunchIcon from "@material-ui/icons/Launch";
import PhoneIcon from "@material-ui/icons/Phone";
import PropTypes from "prop-types";

const { clientSideKey } = apiKeys;

const useStyles = makeStyles((theme) => ({
  placePanel: {
    width: 326,
    height: "calc(100vh - 116px)",
    overflow: "auto",
    "-ms-overflow-style": "none",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  photo: {
    width: "100%",
    maxHeight: 300,
    maxWidth: 500,
    objectFit: "cover",
  },
  icon: {
    width: 24,
    height: 24,
  },
  pin: {
    width: 20,
    height: 24,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

const PlacesPanel = ({
  selectedLocation,
  placeData,
  fetchPlaceData,
  clearSelectedLocation,
}) => {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  useEffect(() => {
    if (selectedLocation) {
      fetchPlaceData(selectedLocation.g_place_id);
    }
  }, [selectedLocation]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handlePanelClose = () => {
    clearSelectedLocation();
  };

  return (
    <>
      {placeData.result && (
        <div className={classes.placePanel}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            pr={1}
          >
            <IconButton onClick={handlePanelClose} size="small">
              <CloseIcon />
            </IconButton>
            <Box justifyContent="center" pt={1} fontSize={20}>
              {placeData.result.name}
            </Box>
            {/* empty div for now */}
            <div className={classes.icon}></div>
            {/* <IconButton onClick={handlePanelClose} size="small">
              <LaunchIcon />
            </IconButton> */}
          </Box>
          <Box
            key={placeData.result.photos[0].photo_reference}
            overflow="hidden"
          >
            <img
              src={
                "https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photoreference=" +
                placeData.result.photos[0].photo_reference +
                "&key=" +
                clientSideKey
              }
              alt={placeData.result.name}
              className={classes.photo}
            />
          </Box>
          <Box pl={1} pr={1}>
            <Box pt={1} fontSize={20}>
              {placeData.result.name}
            </Box>
            <Box pt={1} display="flex" justifyContent="flex-start">
              <Box pr={1}>
                <img src={MapPinDefault} alt="pin" className={classes.pin} />
              </Box>
              <Typography>{placeData.result.formatted_address}</Typography>
            </Box>
            <Box pt={1} pb={2}>
              <Accordion
                expanded={expanded === "openHours"}
                onChange={handleChange("openHours")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="openHours-bh-content"
                  id="openHours-bh-header"
                >
                  <Box
                    display="flex"
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    <Box pr={1}>
                      <ScheduleIcon />
                    </Box>
                    <Typography>Opening Hours</Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    {placeData.result.opening_hours.weekday_text.map((day) => {
                      return <Typography>{day}</Typography>;
                    })}
                  </div>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box display="flex" justifyContent="flex-start">
              <Box pr={1}>
                <img
                  src={placeData.result.icon}
                  alt="website"
                  className={classes.icon}
                />
              </Box>
              <a
                href={placeData.result.website}
                target={placeData.result.website}
              >
                {
                  placeData.result.website
                    .replace(/^(?:https?:\/\/)?(?:www\.)?/i, "")
                    .split("/")[0]
                }
              </a>
            </Box>
            <Box pt={1} pb={1}>
              <Divider />
            </Box>
            <Box display="flex" justifyContent="flex-start">
              <Box pr={1}>
                <PhoneIcon />
              </Box>
              <Typography>{placeData.result.formatted_phone_number}</Typography>
            </Box>
            <Box pt={1} pb={1}>
              <Divider />
            </Box>
            <GoogleReviews reviews={placeData.result.reviews} />
            <Box pb={1}>
              <Typography>Yelp Reviews</Typography>
            </Box>
          </Box>
        </div>
      )}
    </>
  );
};

PlacesPanel.propTypes = {
  selectedLocation: PropTypes.object,
  placeData: PropTypes.object,
  isMobile: PropTypes.bool,
  fetchPlaceData: PropTypes.func,
  clearSelectedLocation: PropTypes.func,
};

PlacesPanel.defaultProps = {
  selectedLocation: {},
  placeData: {},
  isMobile: false,
  fetchPlaceData() {},
  clearSelectedLocation() {},
};

export default PlacesPanel;
