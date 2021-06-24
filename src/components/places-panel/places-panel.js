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
import { sanitizeYelpURL } from "../../common/common-functions";
import GoogleReviews from "./google-reviews";
import YelpReviews from "./yelp-reviews";
import MapPinDefault from "../../assets/map-pin-default.png";
import ScheduleIcon from "@material-ui/icons/Schedule";
import CloseIcon from "@material-ui/icons/Close";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
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
}));

const PlacesPanel = ({
  selectedLocation,
  placeData,
  fetchGooglePlaceData,
  fetchYelpPlaceData,
  clearSelectedLocation,
}) => {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  useEffect(() => {
    if (selectedLocation) {
      fetchGooglePlaceData(selectedLocation?.g_place_id);
      fetchYelpPlaceData(sanitizeYelpURL(selectedLocation?.yelp));
    }
  }, [selectedLocation, fetchGooglePlaceData, fetchYelpPlaceData]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handlePanelClose = () => {
    clearSelectedLocation();
  };

  const { description } = selectedLocation || {};

  const {
    name,
    photos = [],
    formatted_address,
    opening_hours,
    icon,
    website = "",
    formatted_phone_number,
    reviews = [],
    yelp,
  } = placeData || {};

  return (
    <>
      {placeData !== {} && (
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
            <Box justifyContent="center" pt={1} pb={1} fontSize={20}>
              {name}
            </Box>
            {/* empty div for now */}
            <div className={classes.icon}></div>
          </Box>
          <Box key={photos[0]?.photo_reference} overflow="hidden">
            <img
              src={
                "https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photoreference=" +
                photos[0]?.photo_reference +
                "&key=" +
                clientSideKey
              }
              alt={name}
              className={classes.photo}
            />
          </Box>
          <Box pl={1} pr={1}>
            <Box pt={1} fontSize={20}>
              {name}
            </Box>
            <Box pt={1}>{description}</Box>
            <Box pt={2} display="flex" justifyContent="flex-start">
              <Box pr={1}>
                <img src={MapPinDefault} alt="pin" className={classes.pin} />
              </Box>
              <Typography>{formatted_address}</Typography>
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
                    {opening_hours?.weekday_text?.map((day) => {
                      return <Typography>{day}</Typography>;
                    })}
                  </div>
                </AccordionDetails>
              </Accordion>
            </Box>
            {website && (
              <Box display="flex" justifyContent="flex-start">
                <Box pr={1}>
                  <img src={icon} alt="website" className={classes.icon} />
                </Box>
                <a href={website} target={website}>
                  {
                    website
                      .replace(/^(?:https?:\/\/)?(?:www\.)?/i, "")
                      .split("/")[0]
                  }
                </a>
              </Box>
            )}
            <Box pt={1} pb={1}>
              <Divider />
            </Box>
            <Box display="flex" justifyContent="flex-start">
              <Box pr={1}>
                <PhoneIcon />
              </Box>
              <Typography>{formatted_phone_number || "None"}</Typography>
            </Box>
            <Box pt={1} pb={1}>
              <Divider />
            </Box>
            <GoogleReviews reviews={reviews} />
            {yelp && <YelpReviews reviews={yelp?.reviews?.reviews} />}
          </Box>
        </div>
      )}
    </>
  );
};

PlacesPanel.propTypes = {
  selectedLocation: PropTypes.object.isRequired,
  placeData: PropTypes.object,
  isMobile: PropTypes.bool,
  fetchGooglePlaceData: PropTypes.func,
  fetchYelpPlaceData: PropTypes.func,
  fetchInstagramPlaceData: PropTypes.func,
  clearSelectedLocation: PropTypes.func,
};

PlacesPanel.defaultProps = {
  placeData: null,
  isMobile: false,
  fetchGooglePlaceData() {},
  fetchYelpPlaceData() {},
  fetchInstagramPlaceData() {},
  clearSelectedLocation() {},
};

export default PlacesPanel;
