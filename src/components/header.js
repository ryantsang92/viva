/*
  Header component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useState, useEffect } from "react";
import logo from "../assets/viva-logo-final.svg";
import {
  Box,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Modal,
  IconButton,
  Select,
  MenuItem,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import GreenButton from "./common/green-button";
import MobileMenuContainer from "./mobile-menu-container";
import PillBoxContainer from "./pill-box/pill-box-container";
import MetroDropdownContainer from "./metro-dropdown/metro-dropdown-container";
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
  },
  navbar: {
    margin: 0,
    display: "flex",
    justifyContent: "center",
    // width: "100%",
  },
  navbottom: {
    textAlign: "center",
    paddingTop: 16,
    display: "flex",
    justifyContent: "center",
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
    width: "80%",
    maxWidth: 600,
  },
  mutedText: {
    color: "gray",
    fontSize: 14,
    paddingTop: 1,
    display: "flex",
    alignItems: "center",
    // lineHeight: "30px",
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
  mobileHeader: {
  },
  mobileHeaderTop: {
    display: "none",
    flexDirection: "column",
  },
  mobileNavcenter: {

  },
  mobileSelectContainer: {
    flexGrow: 1,
    display: "flex",
    maxWidth: 600,
    margin: "0 auto",
  },
  formControlMobileLeft: {
    minWidth: 75,
    width: "100%",
    background: "#efefef",
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    textAlign: "left",
    height: 32,
    "& label": {
      display: "none",
    },
    "& > div": {
      marginTop: 0,
    },
  },
  formControlMobileRight: {
    minWidth: 75,
    width: "100%",
    background: "#efefef",
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    textAlign: "left",
    height: 32,
    "& label": {
      display: "none",
    },
    "& > div": {
      marginTop: 0,
    },
  },
  mobileSelectBox: {
    fontSize: 15,
    width: "100%",
    paddingLeft: 12,
    lineHeight: "15px",
    "& >div": {
      height: 32,
      display: "flex",
      alignItems: "center",
      paddingTop: 0,
      paddingBottom: 0,
    }
  },
  mobileSelect: {
    display: "flex",
    alignItems: "flex-end",
  },
  mobileLogoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 60,
    paddingLeft: 15,
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
    fontSize: "1rem",
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 10,
    width: "100%",
    "& >div": {
      padding: 0,
      display: "flex",
      alignItems: "center",
    }
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
  clearSelectedVideo,
  selectedCategory,
  fetchSelectedCategory,
  clearSelectedCategory,
  isMobile,
  categories,
  fetchCategories,
  setRefresh,
}) => {
  const classes = useStyles();

  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (selectedVideo && selectedCity && selectedVideo.metro !== selectedCity) {
      clearSelectedVideo();
    }
  }, [selectedVideo, selectedCity, clearSelectedVideo]);

  useEffect(() => {
    if (!categories || !categories.length) {
      fetchCategories();
    }
  }, [categories, fetchCategories]);

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const refreshPage = () => {
    window.location.reload();
  };

  const onHashtagClick = (category) => {
    fetchSelectedCategory(category);
    handleModalClose();
  };

  const handleChange = (event) => {
    // update redux store
    if (event.target.value === "What's New") {
      clearSelectedCategory();
    } else {
      fetchSelectedCategory(event.target.value);
      window.scrollTo(0, 0);
      setRefresh();
    }
  };

  return (
    <div className={isMobile ? classes.mobileHeader : classes.header}>
      {isMobile && (
        <Box>
          <Box className={classes.mobileLogoContainer}>
            <Box className={classes.clear}>
              <img
                src={logo}
                alt="VIVA"
                className={classes.logo}
                onClick={refreshPage}
              />
            </Box>
            <MobileMenuContainer />
          </Box>
          <Box p={1} className={classes.mobileNavcenter}>
            <Box>
              <Box spacing={2} className={classes.navbar}>
                <Box className={classes.mobileSelectContainer}>
                  <Grid item className={classes.cityPicker}>
                    <FormControl
                      className={classes.formControlMobileLeft}
                    >
                      <InputLabel id="category-picker-label">Category</InputLabel>
                      <Box pl={1} display="flex" justifyContent="flex-start">
                        <Select
                          labelId="category-picker-label"
                          id="category-picker"
                          value={selectedCategory || "What's New"}
                          onChange={handleChange}
                          className={classes.mobileSelectBox}
                        >
                          <MenuItem value={"What's New"}>What's New</MenuItem>
                          {categories.map((category) => (
                            <MenuItem value={category} key={category.id}>
                              {category.category}
                            </MenuItem>
                          ))}
                        </Select>
                      </Box>
                    </FormControl>
                  </Grid>
                  <Grid item className={classes.cityPicker}>
                    <FormControl
                      className={classes.formControlMobileRight}
                    >
                      <InputLabel id="city-picker-label">City</InputLabel>
                      <Box pl={1} display="flex" justifyContent="flex-start">
                        <Box className={classes.mutedText} pr={1}>in</Box>
                        <MetroDropdownContainer isMobile={isMobile} />
                      </Box>
                    </FormControl>
                  </Grid>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
      <Box display="flex" alignItems="flex-start" className={isMobile ? classes.mobileHeaderTop : classes.headerTop}>
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
        <Box pt={2} className={classes.navcenter}>
          <Box>
            <Box spacing={2} className={classes.navbar}>
              <Box className={classes.selectContainer}>
                <Grid item className={classes.cityPicker}>
                  <FormControl
                    className={
                      isMobile
                        ? classes.formControlMobile
                        : classes.formControl1
                    }
                  >
                    <InputLabel id="category-picker-label">Category</InputLabel>
                    <Box pl={1} display="flex" justifyContent="flex-start">
                      <Select
                        labelId="category-picker-label"
                        id="category-picker"
                        value={selectedCategory || "What's New"}
                        onChange={handleChange}
                        className={isMobile ? classes.mobileSelectBox : classes.selectBox}
                      >
                        <MenuItem value={"What's New"}>What's New</MenuItem>
                        {categories.map((category) => (
                          <MenuItem value={category} key={category.id}>
                            {category.category}
                          </MenuItem>
                        ))}
                      </Select>
                    </Box>
                  </FormControl>
                </Grid>
                <Grid item className={classes.cityPicker}>
                  <FormControl
                    className={
                      isMobile
                        ? classes.formControlMobile
                        : classes.formControl2
                    }
                  >
                    <InputLabel id="city-picker-label">City</InputLabel>
                    <Box pl={1} display="flex" justifyContent="flex-start">
                      <Box className={classes.mutedText} pr={1} style={{fontSize: 16}}>in</Box>
                      <MetroDropdownContainer isMobile={isMobile} />
                    </Box>
                  </FormControl>
                </Grid>
              </Box>
            </Box>
          </Box>
          {!isMobile && (
            <Box pt={2} className={classes.navbottom}>
              <PillBoxContainer isMobile={isMobile} categories={categories} />
            </Box>
          )}
        </Box>
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
      </Box>
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
  categories: PropTypes.array,
  clearSelectedVideo: PropTypes.func,
  fetchSelectedCategory: PropTypes.func,
  clearSelectedCategory: PropTypes.func,
  fetchCategories: PropTypes.func,
};

Header.defaultProps = {
  selectedVideo: {},
  selectedLocation: null,
  isMobile: false,
  categories: [],
  clearSelectedVideo() {},
  fetchSelectedCategory() {},
  clearSelectedCategory() {},
  fetchCategories() {},
};

export default Header;
