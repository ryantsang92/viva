/*
  header component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React from "react";
import logo from "../viva-logo-transparent.png";
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
  logo: {
    width: 288,
    height: 98,
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
}));

const Header = () => {
  const classes = useStyles();

  const [city, setCity] = React.useState("");

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6} className={classes.topGrid}>
          <Box className={classes.topGridLogo}>
            <img src={logo} alt="VIVA" className={classes.logo} />
            {/* <Box mb={2}>
              <Typography>Get in. Get out. Get going</Typography>
            </Box> */}
          </Box>
        </Grid>
        <Grid item xs={6} className={classes.topGridSocials}>
          <SocialGrid />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
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
                <MenuItem value={"Boston"}>Boston</MenuItem>
                <MenuItem value={"New York"}>New York</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Grid item>
          <Box mt={2} mb={1} className={classes.left}>
            {/* search bar will be added later */}
            {/* <SearchBar /> */}
            <PillBoxContainer />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
