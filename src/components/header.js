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
  Button,
} from "@material-ui/core";
import PillBoxContainer from "./pill-box/pill-box-container";
import SocialGrid from "./social-grid";
import { aboutText } from "../app-constants";
// import SearchBar from "./search-bar";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

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
    minWidth: 150,
    background: "#efefef",
    borderRadius: 15,
    textAlign: "left",
    marginLeft: 15,
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
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  selectBox: {
    height: 32,
    width: "100%",
  },
  modal: {
    height: 500,
    width: 700,
  },
}));

const Header = ({ saveSelectedCity, clearSelectedCity }) => {
  const classes = useStyles();

  const [city, setCity] = useState("All");
  const [modalOpen, setModalOpen] = useState(false);

  const handleChange = (event) => {
    setCity(event.target.value);

    // update redux store
    if (event.target.value === "All") {
      clearSelectedCity();
    } else {
      saveSelectedCity(event.target.value.replace(/\s/g, ""));
    }
  };

  const onAboutClick = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const ThemeButton = withStyles({
    root: {
      backgroundColor: "#228B6E",
      "&:hover": {
        backgroundColor: "#228b8b",
      },
    },
  })(Button);

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
              <ThemeButton
                variant="contained"
                color="primary"
                onClick={onAboutClick}
              >
                About
              </ThemeButton>
            </Typography>
            <Typography className={classes.menuLink}>
              <ThemeButton
                variant="contained"
                color="primary"
                onClick={onAboutClick}
              >
                Share Your Experience
              </ThemeButton>
            </Typography>
            <SocialGrid />
          </Box>
        </Grid>
      </Grid>
      <Box mt={1} mb={1}>
        <Grid container spacing={2} className={classes.navbar}>
          <Grid item className={classes.cityPicker}>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">City</InputLabel>
              <Box pl={2}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={city}
                  onChange={handleChange}
                  className={classes.selectBox}
                >
                  <MenuItem value={"All"}>All</MenuItem>
                  <MenuItem value={"Boston"}>Boston</MenuItem>
                  <MenuItem value={"New York"}>New York</MenuItem>
                </Select>
              </Box>
            </FormControl>
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
        className={classes.modal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.paper}>
          <Box mb={1}>
            <Typography variant="h4" id="simple-modal-title">
              About Viva
            </Typography>
          </Box>
          <Typography id="simple-modal-description">{aboutText()}</Typography>
        </div>
      </Modal>
    </div>
  );
};

Header.propTypes = {
  saveSelectedCity: PropTypes.func,
  clearSelectedCity: PropTypes.func,
};

Header.defaultProps = {
  saveSelectedCity() {},
  clearSelectedCity() {},
};

export default Header;
