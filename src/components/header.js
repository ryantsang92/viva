/*
  Header component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useState, useEffect } from "react";
import logo from "../assets/new-viva-logo.svg";
import MapPinDefault from "../assets/map-pin-default.png";
import {
  Box,
  Typography,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Modal,
  IconButton,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import GreenButton from "./common/green-button";
import MobileMenu from "./mobile-menu";
import PillBoxContainer from "./pill-box/pill-box-container";
import SocialGrid from "./social-grid";
import { aboutText } from "../app-constants";
// import SearchBar from "./search-bar";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  header: {
    position: "relative",
    height: 140,
    boxShadow: "1px 0px 5px rgba(0,0,0,0.5)",
    zIndex: 2,
  },
  headerTop: {
    height: 60,
    margin: 0,
    width: "100%",
  },
  logoContainer: {
    height: 60,
    display: "flex",
    alignItems: "center",
    paddingLeft: 15,
  },
  logo: {
    width: 144,
    height: 56,
  },
  logoMobile: {
    width: 108,
    height: 52,
  },
  pin: {
    margin: "auto",
    width: 20,
    height: 24,
  },
  navbar: {
    height: 80,
    margin: 0,
    width: "100%",
  },
  cityPicker: {
    padding: "0 !important",
    height: 80,
    display: "flex",
    alignItems: "center",
  },
  formControl: {
    minWidth: 150,
    background: "#efefef",
    borderRadius: 15,
    textAlign: "left",
    height: 32,
    "& label": {
      display: "none",
    },
    "& > div": {
      marginTop: 0,
    },
  },
  formControlMobile: {
    minWidth: 75,
    background: "#efefef",
    borderRadius: 15,
    textAlign: "left",
    height: 32,
    "& label": {
      display: "none",
    },
    "& > div": {
      marginTop: 0,
    },
  },
  left: {
    width: "100%",
  },
  hashContainer: {
    padding: "0 !important",
  },
  clear: {
    padding: "0 !important",
    margin: "0 !important",
  },
  menuLink: {
    color: "#555",
    fontSize: 18,
    marginRight: 18,
  },
  paper: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  paperMobile: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  selectBox: {
    height: 32,
    width: "100%",
  },
}));

const Header = ({
  selectedVideo,
  selectedCity,
  saveSelectedCity,
  clearSelectedCity,
  clearSelectedVideo,
  clearSelectedLocation,
}) => {
  const classes = useStyles();

  const [city, setCity] = useState("All");
  const [modalOpen, setModalOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    if (selectedVideo && selectedCity && selectedVideo.metro !== selectedCity) {
      clearSelectedVideo();
    }
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, [selectedVideo, selectedCity]);

  let isMobile = width <= 768;

  const handleChange = (event) => {
    setCity(event.target.value);

    // update redux store
    if (event.target.value === "All") {
      clearSelectedCity();
    } else {
      clearSelectedLocation();
      saveSelectedCity(event.target.value.replace(/\s/g, ""));
    }
  };

  const onAboutClick = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div className={classes.header}>
      <Grid container className={classes.headerTop}>
        <Grid item xs={2} className={classes.clear}>
          <Box className={classes.logoContainer}>
            <Box className={classes.clear}>
              <img
                src={logo}
                alt="VIVA"
                className={isMobile ? classes.logoMobile : classes.logo}
              />
            </Box>
          </Box>
        </Grid>

        <Grid item xs={10}>
          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            pt={2}
          >
            {!isMobile && (
              <div className={classes.menuLink}>
                <GreenButton buttonText="About" onClick={onAboutClick} />
              </div>
            )}
            <SocialGrid />
            {isMobile && <MobileMenu />}
          </Box>
        </Grid>
      </Grid>
      <Box mt={1} mb={1}>
        <Grid container spacing={2} className={classes.navbar}>
          <Grid item className={classes.cityPicker}>
            <Box pl={1} pr={1}>
              <FormControl
                className={
                  isMobile ? classes.formControlMobile : classes.formControl
                }
              >
                <InputLabel id="city-picker-label">City</InputLabel>
                <Box pl={1} display="flex" justifyContent="flex-start">
                  <Box pr={1}>
                    <img
                      src={MapPinDefault}
                      alt="city"
                      className={classes.pin}
                    />
                  </Box>
                  <Select
                    labelId="city-picker-label"
                    id="city-picker"
                    value={city}
                    onChange={handleChange}
                    className={classes.selectBox}
                  >
                    <MenuItem value={"All"}>All</MenuItem>
                    <MenuItem value={"Boston"}>BOS</MenuItem>
                    <MenuItem value={"New York"}>NYC</MenuItem>
                  </Select>
                </Box>
              </FormControl>
            </Box>
          </Grid>
          <Grid item className={classes.hashContainer}>
            <Box className={classes.left}>
              {/* search bar will be added later */}
              {/* <SearchBar /> */}
              <PillBoxContainer />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={isMobile ? classes.paperMobile : classes.paper}>
          <Box mb={2} display="flex">
            <Box width="100%">
              <Typography variant="h4" id="simple-modal-title">
                What is VIVA?
              </Typography>
            </Box>
            <Box flexShrink={0}>
              <IconButton onClick={handleModalClose} size="small">
                <CloseIcon />
              </IconButton>
            </Box>
          </Box>
          <Box mb={2}>
            <Typography id="simple-modal-description">{aboutText()}</Typography>
          </Box>
          <Box display="flex" justifyContent="flex-end">
            <GreenButton buttonText="Got it!" onClick={handleModalClose} />
          </Box>
        </div>
      </Modal>
    </div>
  );
};

Header.propTypes = {
  selectedVideo: PropTypes.object,
  selectedLocation: PropTypes.string,
  saveSelectedCity: PropTypes.func,
  clearSelectedCity: PropTypes.func,
  clearSelectedLocation: PropTypes.func,
};

Header.defaultProps = {
  selectedVideo: {},
  selectedLocation: null,
  saveSelectedCity() {},
  clearSelectedCity() {},
  clearSelectedLocation() {},
};

export default Header;
