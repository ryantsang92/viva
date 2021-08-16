/*
  Header component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useEffect } from "react";
import logo from "../assets/viva-logo-final.svg";
import { Box, Grid, FormControl, InputLabel } from "@material-ui/core";
import MobileMenuContainer from "./mobile-menu-container";
import PillBoxContainer from "./pill-box/pill-box-container";
import CategoryDropdownContainer from "./category-dropdown/category-dropdown-container";
import MetroDropdownContainer from "./metro-dropdown/metro-dropdown-container";
import SocialGrid from "./social-grid";
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
  navcenter: {
    flexGrow: 1,
    height: 116,
  },
  navbar: {
    margin: 0,
    display: "flex",
    justifyContent: "center",
  },
  navbottom: {
    textAlign: "center",
    paddingTop: 16,
    display: "flex",
    justifyContent: "center",
  },
  selectContainer: {
    display: "flex",
    width: "80%",
    maxWidth: 600,
  },
  mutedText: {
    color: "gray",
    fontSize: 14,
    paddingTop: 1,
    display: "flex",
    alignItems: "center",
  },
  cityPicker: {
    boxShadow: "0px 3px 6px 3px rgba(0,0,0,0.1)",
    borderRadius: 20,
    padding: "0 !important",
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  formControl: {
    minWidth: 150,
    width: "100%",
    background: "#fff",
    borderRadius: 25,
    textAlign: "left",
    "& label": {
      display: "none",
    },
    "& > div": {
      marginTop: 0,
    },
  },
  mobileHeader: {
    position: "sticky",
    top: -60,
    zIndex: 9,
    backgroundColor: "white",
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
  mobileLogoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 60,
    paddingLeft: 15,
  },
  mobileSocialBox: {
    "& p": {
      display: "none",
    },
  },
  clear: {
    padding: "0 !important",
    margin: "0 !important",
  },
  in: {
    alignSelf: "center",
  },
}));

const Header = ({
  selectedVideo,
  selectedCity,
  clearSelectedVideo,
  isMobile,
  categories,
  fetchCategories,
}) => {
  const classes = useStyles();
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

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className={isMobile ? classes.mobileHeader : classes.header}>
      {isMobile ? (
        <>
          <Box className={classes.mobileLogoContainer}>
            <Box className={classes.clear}>
              <img
                src={logo}
                alt="VIVA"
                className={classes.logo}
                onClick={refreshPage}
              />
            </Box>
            <Box
              className={classes.mobileSocialBox}
              display="flex"
              justifyContent="flex-end"
            >
              <SocialGrid isMobile={isMobile} />
              <MobileMenuContainer isMobile={isMobile} />
            </Box>
          </Box>
          <Box p={1}>
            <Box spacing={2} className={classes.navbar}>
              <Box className={classes.mobileSelectContainer}>
                <Grid item className={classes.cityPicker}>
                  <FormControl className={classes.formControlMobileLeft}>
                    <InputLabel id="category-picker-label">Category</InputLabel>
                    <Box pl={1} display="flex" justifyContent="flex-start">
                      <CategoryDropdownContainer isMobile={isMobile} />
                    </Box>
                  </FormControl>
                </Grid>
                <Grid item className={classes.cityPicker}>
                  <FormControl className={classes.formControlMobileRight}>
                    <InputLabel id="city-picker-label">City</InputLabel>
                    <Box pl={1} display="flex" justifyContent="flex-start">
                      <Box className={classes.mutedText} pr={1}>
                        in
                      </Box>
                      <MetroDropdownContainer isMobile={isMobile} />
                    </Box>
                  </FormControl>
                </Grid>
              </Box>
            </Box>
          </Box>
        </>
      ) : (
        <Box
          display="flex"
          alignItems="flex-start"
          className={classes.headerTop}
        >
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
            <Box spacing={2} className={classes.navbar}>
              <Box className={classes.selectContainer}>
                <Grid item className={classes.cityPicker}>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="category-picker-label">Category</InputLabel>
                    <Box pl={1} display="flex" justifyContent="flex-start">
                      <CategoryDropdownContainer isMobile={isMobile} />
                    </Box>
                  </FormControl>
                </Grid>
                <Grid item className={classes.in}>
                  <Box
                    className={classes.mutedText}
                    pr={1}
                    pl={1}
                    style={{ fontSize: 16 }}
                  >
                    in
                  </Box>
                </Grid>
                <Grid item className={classes.cityPicker}>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="city-picker-label">City</InputLabel>
                    <Box pl={1} display="flex" justifyContent="flex-start">
                      <MetroDropdownContainer isMobile={isMobile} />
                    </Box>
                  </FormControl>
                </Grid>
              </Box>
            </Box>
            <Box pt={2} className={classes.navbottom}>
              <PillBoxContainer isMobile={isMobile} categories={categories} />
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            flexDirection="row"
            pt={2}
          >
            <SocialGrid isMobile={isMobile} />
            <MobileMenuContainer isMobile={isMobile} />
          </Box>
        </Box>
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
  fetchCategories: PropTypes.func,
};

Header.defaultProps = {
  selectedVideo: {},
  selectedLocation: null,
  isMobile: false,
  categories: [],
  clearSelectedVideo() {},
  fetchCategories() {},
};

export default Header;
