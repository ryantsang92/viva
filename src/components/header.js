/*
  Header component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useState } from "react";
// import logo from "../assets/viva-logo-transparent.png";
import {
  Box,
  Typography,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Modal,
} from "@material-ui/core";
import PillBoxContainer from "./pill-box/pill-box-container";
import SocialGrid from "./social-grid";
// import SearchBar from "./search-bar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    position: "relative",
    height: 140,
    boxShadow: "1px 0px 5px rgba(0,0,0,0.5)",
    zIndex: 100,
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
    width: "40%",
    height: "40%",
    // display: 'none',
  },
  logoText: {
    fontSize: 40,
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
    // margin: theme.spacing(1),
    minWidth: 150,
    background: "#efefef",
    // border: '1px solid #ddd',
    borderRadius: 15,
    textAlign: "center",
    marginLeft: 15,
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
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Header = () => {
  const classes = useStyles();

  const [city, setCity] = useState("All");
  const [modalOpen, setModalOpen] = useState(false);

  const handleChange = (event) => {
    setCity(event.target.value);
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
        <Grid item xs={6} className={classes.clear}>
          <Box className={classes.logoContainer}>
            <Box className={classes.clear}>
              <Typography className={classes.logoText}>VIVA</Typography>
              {/* <img src={logo} alt="VIVA" className={classes.logo} /> */}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            pt={2}
          >
            <Typography className={classes.menuLink}>
              <a href="#" onClick={onAboutClick}>
                About
              </a>
            </Typography>
            <Typography className={classes.menuLink}>Submit Video</Typography>
            <SocialGrid />
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.navbar}>
        <Grid item className={classes.cityPicker}>
          <Box>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">City</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={city}
                onChange={handleChange}
              >
                <MenuItem value={"All"}>All</MenuItem>
                <MenuItem value={"Boston"}>Boston</MenuItem>
                <MenuItem value={"New York"}>New York</MenuItem>
              </Select>
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
      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.paper}>
          <Box mb={1}>
            <Typography variant="h4" id="simple-modal-title">
              About Viva
            </Typography>
          </Box>
          <Typography id="simple-modal-description">
            VIVA is an O2O (online-to-offline) social exploration platform that
            redefines how people search, find and share experiences. If you ever
            feel like changing up your day, VIVA gives you instant access to a
            vast library of local experiences. From a picture-perfect coffee
            shop, to a hidden art gallery or even the secret menu at your local
            restaurant, VIVA makes your daily life fun and exciting. Beyond
            local attractions, you can also find communities of like-minded
            individuals to connect with. Join VIVA and be part of the adventure.
          </Typography>
        </div>
      </Modal>
    </div>
  );
};

export default Header;
