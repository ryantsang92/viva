/*
  header component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React from "react";
// import logo from "../viva-logo-transparent.png";
import {
  Box,
  Typography,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import PillBoxContainer from "./pill-box-container";
import SocialGrid from "./social-grid";
// import SearchBar from "./search-bar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  left: {
    width: "100%",
  },
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
    // float: "left",
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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  topGrid: {
    display: "flex",
  },
  topGridLogo: {
    textAlign: "left",
  },
  topGridSocials: {
    textAlign: "right",
    float: "right",
  },
  clear: {
    padding: "0 !important",
    margin: "0 !important",
  },
}));

const Header = () => {
  const classes = useStyles();

  const [city, setCity] = React.useState("All");

  const handleChange = (event) => {
    setCity(event.target.value);
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
        <Grid item xs={6} className={classes.topGridSocials}>
          <SocialGrid />
        </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.navbar}>
        <Grid item>
          <Box ml={3}>
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
        <Grid item>
          <Box className={classes.left}>
            {/* search bar will be added later */}
            {/* <SearchBar /> */}
            <PillBoxContainer />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
