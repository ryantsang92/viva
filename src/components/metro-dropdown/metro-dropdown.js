/*
  Metro dropdown component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useState, useEffect } from "react";
import { Select, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
  selectBox: {
    height: 32,
    width: "100%",
  },
}));

const MetroDropdown = ({
  metroData,
  fetchMetros,
  clearSelectedCity,
  clearSelectedLocation,
  saveSelectedCity,
  setRefresh,
}) => {
  const classes = useStyles();

  const [city, setCity] = useState("All");

  useEffect(() => {
    if (metroData?.metros === null) {
      fetchMetros();
    }
  }, [metroData, fetchMetros]);

  const handleChange = (event) => {
    setCity(event.target.value);

    // update redux store
    if (event.target.value === "All") {
      clearSelectedCity();
    } else {
      clearSelectedLocation();
      saveSelectedCity(event.target.value);
      //add refresh
      setRefresh();
    }
  };

  return (
    <Select
      labelId="city-picker-label"
      id="city-picker"
      value={city}
      onChange={handleChange}
      className={classes.selectBox}
    >
      <MenuItem value={"All"}>All</MenuItem>
      {metroData?.metros
        ?.sort((a, b) => a.name - b.name) //fix sort
        ?.map((metro) => (
          <MenuItem value={metro} key={metro.id}>
            {metro.name}
          </MenuItem>
        ))}
    </Select>
  );
};

MetroDropdown.propTypes = {
  metros: PropTypes.array,
  fetchMetros: PropTypes.func,
  clearSelectedCity: PropTypes.func,
  clearSelectedLocation: PropTypes.func,
  saveSelectedCity: PropTypes.func,
  setRefresh: PropTypes.func,
};

MetroDropdown.defaultProps = {
  metros: null,
  fetchMetros() {},
  clearSelectedCity() {},
  clearSelectedLocation() {},
  saveSelectedCity() {},
  setRefresh() {},
};

export default MetroDropdown;
