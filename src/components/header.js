/*
  Header component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useState, useEffect } from "react";
import logo from "../assets/viva-logo-final.svg";
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
import MobileMenuContainer from "./mobile-menu-container";
import PillBoxContainer from "./pill-box/pill-box-container";
import SocialGrid from "./social-grid";
import { hashtagObjects } from "../app-constants";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  header: {
    position: "relative",
    boxShadow: "1px 0px 5px rgba(0,0,0,0.5)",
    zIndex: 100,
    "@media (max-width: 767px)": {
      position: "sticky",
      top: -55,
      background: "white",
    },
  },
  headerTop: {
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
    paddingTop: 5,
    height: 42,
    cursor: "pointer",
  },
  pin: {
    margin: "auto",
    width: 20,
    height: 24,
  },
  navcenter: {
    flexGrow: 1,
    height: 116,
    paddingTop: 16,
  },
  navbar: {
    margin: 0,
    display: 'flex',
    justifyContent: 'center',
    // width: "100%",
  },
  navbottom: {
    textAlign: 'center',
    paddingTop: 16,
    display: 'flex',
    justifyContent: 'center',
  },
  quicklink: {
    fontSize: 17,
    fontWeight: 400,
    margin: "0 13px",
  },
  selectContainer: {
    display: "flex",
    boxShadow: "0px 3px 6px 3px rgba(0,0,0,0.1)",
    borderRadius: 20,
    width: '80%',
    maxWidth: 600,
  },
  mutedText: {
    color: "gray",
    fontSize: 16,
    lineHeight: "40px",
  },
  cityPicker: {
    padding: "0 !important",
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  formControl1: {
    minWidth: 150,
    width: "100%",
    background: "#fff",
    borderRadius: "25px 0 0 25px",
    textAlign: "left",
    // height: 32,
    "& label": {
      display: "none",
    },
    "& > div": {
      marginTop: 0,
    },
  },
  formControl2: {
    minWidth: 150,
    width: "100%",
    background: "#fff",
    borderRadius: "0 25px 25px 0",
    textAlign: "left",
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
  },
  paper: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: theme.palette.background.paper,
    borderRadius: 15,
    boxShadow: theme.shadows[5],
  },
  paperMobile: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: theme.palette.background.paper,
    borderRadius: 15,
    boxShadow: theme.shadows[5],
  },
  selectBox: {
    // height: 32,
    fontSize: 17,
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 15,
    width: "100%",
  },
  modalLogo: {
    borderRadius: 15,
    height: "100%",
    width: "100%",
    backgroundColor: "#F7F0D7",
  },
  blockQuote: {
    paddingLeft: "15px",
  },
}));

const Header = ({
  selectedVideo,
  selectedCity,
  saveSelectedCity,
  clearSelectedCity,
  clearSelectedVideo,
  clearSelectedLocation,
  fetchSelectedHashtag,
  isMobile,
}) => {
  const classes = useStyles();

  const [city, setCity] = useState("All");
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (selectedVideo && selectedCity && selectedVideo.metro !== selectedCity) {
      clearSelectedVideo();
    }
  }, [selectedVideo, selectedCity, clearSelectedVideo]);

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

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const refreshPage = () => {
    window.location.reload(true);
  };

  const onHashtagClick = (hashtag) => {
    fetchSelectedHashtag(hashtag);
    handleModalClose();
  };

  return (
    <div className={classes.header}>
      <Grid container className={classes.headerTop}>
        <Grid item xs={3} className={classes.clear}>
          <Box className={classes.logoContainer}>
            <Box className={classes.clear}>
              <img
                src={logo}
                alt="VIVA"
                className={classes.logo}
                onClick={refreshPage}
              />
            </Box>
          </Box>
        </Grid>
        <Box className={classes.navcenter}>
          <Box>
            <Box container spacing={2} className={classes.navbar}>
              <Box className={classes.selectContainer}>
                <Grid item className={classes.cityPicker}>
                  <FormControl
                    className={
                      isMobile ? classes.formControlMobile : classes.formControl1
                    }
                  >
                    <InputLabel id="city-picker-label">City</InputLabel>
                    <Box pl={1} display="flex" justifyContent="flex-start">
                      <Select
                        labelId="city-picker-label"
                        id="city-picker"
                        value={city}
                        onChange={handleChange}
                        className={classes.selectBox}
                      >
                        <MenuItem value={"All"}>Whats New</MenuItem>
                        <MenuItem value={"New York"}>Restaurants and Bars</MenuItem>
                        <MenuItem value={"Boston"}>Cafe & Bakery</MenuItem>
                        <MenuItem value={"San Diego"}>Parks & Rec</MenuItem>
                        <MenuItem value={"San Diego"}>Attractions</MenuItem>
                      </Select>
                    </Box>
                  </FormControl>
                </Grid>
                <Grid item className={classes.cityPicker}>
                  <FormControl
                    className={
                      isMobile ? classes.formControlMobile : classes.formControl2
                    }
                  >
                    <InputLabel id="city-picker-label">City</InputLabel>
                    <Box pl={1} display="flex" justifyContent="flex-start">
                      <Box pr={1} className={classes.mutedText}>
                        in
                      </Box>
                      <Select
                        labelId="city-picker-label"
                        id="city-picker"
                        value={city}
                        onChange={handleChange}
                        className={classes.selectBox}
                      >
                        <MenuItem value={"All"}>New York</MenuItem>
                        <MenuItem value={"Boston"}>Boston</MenuItem>
                        <MenuItem value={"New York"}>New fYork</MenuItem>
                        <MenuItem value={"San Diego"}>San Diego</MenuItem>
                        <MenuItem value={"San Francisco"}>San Francisco</MenuItem>
                      </Select>
                    </Box>
                  </FormControl>
                </Grid>
              </Box>
            </Box>
          </Box>
          <Grid className={classes.navbottom}>
            <Box className={classes.quicklink}>Restaurants & Bars</Box>
            <Box className={classes.quicklink}>Cafe & Bakery</Box>
            <Box className={classes.quicklink}>Parks & Rec</Box>
            <Box className={classes.quicklink}>Attractions</Box>
            <Box className={classes.quicklink}>Shopping</Box>
          </Grid>
        </Box>
        <Grid item xs={3}>
          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            flexDirection="row"
            pt={2}
          >
            <SocialGrid />
            <MobileMenuContainer />
          </Box>
        </Grid>
      </Grid>
      {!isMobile && (
        <Modal
          open={modalOpen}
          onClose={handleModalClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <Box className={classes.paper}>
            <Grid container>
              <Grid item xs={4}>
                <Box
                  className={classes.modalLogo}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <img src={logo} alt="VIVA" className={classes.logo} />
                </Box>
              </Grid>
              <Grid item xs={8}>
                <Box pl={2} pt={2} pb={2} pr={2}>
                  <Box mb={2} display="flex">
                    <Box width="100%">
                      <Typography variant="h5" id="simple-modal-title">
                        Welcome to VIVA!
                      </Typography>
                    </Box>
                    <Box flexShrink={0}>
                      <IconButton onClick={handleModalClose} size="small">
                        <CloseIcon />
                      </IconButton>
                    </Box>
                  </Box>
                  <Box mb={2}>
                    <Typography id="simple-modal-description">
                      <Typography>
                        VIVA is a social exploration platform where you can
                        quickly and easily discover places to go and things to
                        do from people like you.
                      </Typography>
                      <br></br>
                      <Typography>
                        If you ever feel like changing up your day, VIVA gets
                        you instant access to a vast library of recommendations
                        from your local community.
                      </Typography>
                      <br></br>
                      <div className={classes.blockQuote}>
                        <Typography>
                          Stop by a{" "}
                          <a
                            href="/#"
                            onClick={() =>
                              onHashtagClick(hashtagObjects.picturePerfect)
                            }
                          >
                            #pictureperfect
                          </a>{" "}
                          coffee shop
                        </Typography>
                        <Typography>
                          Have{" "}
                          <a
                            href="/#"
                            onClick={() =>
                              onHashtagClick(hashtagObjects.funWithFriends)
                            }
                          >
                            #funwithfriends
                          </a>{" "}
                          at a vineyard nearby
                        </Typography>
                        <Typography>
                          Discover cool restaurants that are{" "}
                          <a
                            href="/#"
                            onClick={() =>
                              onHashtagClick(hashtagObjects.worthTheHype)
                            }
                          >
                            #worththehype
                          </a>
                        </Typography>
                      </div>
                      <br></br>
                      <Typography>
                        VIVA uncovers all the #hiddengems for you, making your
                        everyday fun and exciting.
                      </Typography>
                      <br></br>
                      <Typography>Happy exploring!</Typography>
                    </Typography>
                  </Box>
                  <Box display="flex" justifyContent="flex-end">
                    <GreenButton
                      buttonText="Got it!"
                      onClick={handleModalClose}
                    />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Modal>
      )}
    </div>
  );
};

Header.propTypes = {
  selectedVideo: PropTypes.object,
  selectedLocation: PropTypes.string,
  isMobile: PropTypes.bool,
  saveSelectedCity: PropTypes.func,
  clearSelectedCity: PropTypes.func,
  clearSelectedLocation: PropTypes.func,
  clearSelectedVideo: PropTypes.func,
  fetchSelectedHashtag: PropTypes.func,
};

Header.defaultProps = {
  selectedVideo: {},
  selectedLocation: null,
  isMobile: false,
  saveSelectedCity() {},
  clearSelectedCity() {},
  clearSelectedLocation() {},
  clearSelectedVideo() {},
  fetchSelectedHashtag() {},
};

export default Header;
