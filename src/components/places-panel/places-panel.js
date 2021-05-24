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
import MapPinDefault from "../../assets/map-pin-default.png";
import ScheduleIcon from "@material-ui/icons/Schedule";
import CloseIcon from "@material-ui/icons/Close";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LaunchIcon from "@material-ui/icons/Launch";
import PropTypes from "prop-types";
import { apiKeys } from "../../app-constants";

const { clientSideKey } = apiKeys;

const useStyles = makeStyles((theme) => ({
  placePanel: {
    width: 300,
    height: "calc(100vh - 116px)",
    overflow: "auto",
    "-ms-overflow-style": "none",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
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
          <Box display="flex" justifyContent="space-between" pr={1}>
            <IconButton onClick={handlePanelClose} size="small">
              <CloseIcon />
            </IconButton>
            <Box justifyContent="center" pt={1}>
              <h5>
                <Typography align="center">{placeData.result.name}</Typography>
              </h5>
            </Box>
            <IconButton onClick={handlePanelClose} size="small">
              <LaunchIcon />
            </IconButton>
          </Box>
          <Box pl={1} pr={1}>
            <Box
              key={placeData.result.photos[0].photo_reference}
              overflow="hidden"
            >
              <img
                src={
                  "https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&photoreference=" +
                  placeData.result.photos[0].photo_reference +
                  "&key=" +
                  clientSideKey
                }
                alt={placeData.result.name}
              />
            </Box>
            <h6>
              <Typography>{placeData.result.name}</Typography>
            </h6>
            <Box display="flex" justifyContent="flex-start">
              <Box pr={1}>
                <img src={MapPinDefault} alt="city" className={classes.pin} />
              </Box>
              <Typography>{placeData.result.formatted_address}</Typography>
            </Box>
            <Box pt={1} pb={1}>
              <Divider />
            </Box>
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Box
                  display="flex"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <Box pr={1}>
                    <ScheduleIcon />
                  </Box>
                  <Typography className={classes.secondaryHeading}>
                    Opening Hours
                  </Typography>
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
            <Box pt={1} pb={1}>
              <Divider />
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
