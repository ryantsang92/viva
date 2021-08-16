/*
  Metro dropdown component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useEffect } from "react";
import { Select, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { newYork } from "../../app-constants";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
  selectBox: {
    paddingLeft: 8,
    width: "100%",
    fontSize: "1rem",
    "& >div": {
      padding: 0,
      display: "flex",
      alignItems: "center",
    },
  },
  mobileSelectBox: {
    height: 32,
    width: "100%",
    fontSize: 15,
    "& >div": {
      padding: 0,
      display: "flex",
      alignItems: "center",
    },
  },
}));

const MetroDropdown = ({
  metroData,
  selectedCity,
  fetchMetros,
  closePlacePanels,
  saveSelectedCity,
  saveSelectedMetro,
  setRefresh,
  isMobile,
}) => {
  const classes = useStyles();

  useEffect(() => {
    if (metroData?.metros === null) {
      fetchMetros();
    }
  }, [metroData, fetchMetros]);

  const handleChange = (event) => {
    // update redux store
    closePlacePanels();
    saveSelectedMetro(
      metroData?.metros?.filter((metro) => metro.name === event.target.value)[0]
    );
    saveSelectedCity(event.target.value);
    setRefresh();
  };

  const sortData = (array) => {
    return array?.sort((a, b) => {
      var nameA = a.name.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
  };

  return (
    <Select
      labelId="city-picker-label"
      id="city-picker"
      value={selectedCity || newYork.name}
      defaultValue={newYork.name}
      onChange={handleChange}
      className={isMobile ? classes.mobileSelectBox : classes.selectBox}
    >
      {sortData(metroData?.metros)?.map((metro) => (
        <MenuItem value={metro.name} key={metro?.id}>
          {metro?.name}
        </MenuItem>
      ))}
    </Select>
  );
};

MetroDropdown.propTypes = {
  metros: PropTypes.array,
  selectedCity: PropTypes.object,
  fetchMetros: PropTypes.func,
  closePlacePanels: PropTypes.func,
  saveSelectedCity: PropTypes.func,
  setRefresh: PropTypes.func,
  isMobile: PropTypes.bool,
};

MetroDropdown.defaultProps = {
  metros: null,
  selectedCity: newYork,
  fetchMetros() {},
  closePlacePanels() {},
  saveSelectedCity() {},
  setRefresh() {},
  isMobile: false,
};

export default MetroDropdown;
