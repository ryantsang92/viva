/*
  Metro dropdown component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useState, useEffect } from "react";
import { Select, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { newYork } from "../../app-constants";
import PropTypes from "prop-types";
import { refreshEverything } from "../../actions/combined-actions";

const useStyles = makeStyles(() => ({
  selectBox: {
    height: 32,
    width: "100%",
  },
}));

const MetroDropdown = ({
  metroData,
  selectedCity,
  mapBounds,
  fetchMetros,
  clearSelectedCity,
  clearSelectedLocation,
  saveSelectedCity,
  setRefresh,
  refreshEverything,
}) => {
  const classes = useStyles();

  // const [selectValue, setSelectValue] = useState(selectedCity);

  useEffect(() => {
    if (metroData?.metros === null) {
      fetchMetros();
    }
  }, [metroData, fetchMetros]);

  // useEffect(() => {
  //   if (selectedCity) {
  //     setSelectValue(selectedCity);
  //   }
  // }, [selectedCity]);

  const handleChange = (event) => {
    // update redux store
    clearSelectedLocation();
    saveSelectedCity(event.target.value);
    refreshEverything(mapBounds);
    //add refresh
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
      value={selectedCity}
      defaultValue={newYork}
      onChange={handleChange}
      className={classes.selectBox}
    >
      {sortData(metroData?.metros) //fix sort
        ?.map((metro) => (
          <MenuItem value={metro} key={metro?.id}>
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
  clearSelectedCity: PropTypes.func,
  clearSelectedLocation: PropTypes.func,
  saveSelectedCity: PropTypes.func,
  setRefresh: PropTypes.func,
};

MetroDropdown.defaultProps = {
  metros: null,
  selectedCity: newYork,
  fetchMetros() {},
  clearSelectedCity() {},
  clearSelectedLocation() {},
  saveSelectedCity() {},
  setRefresh() {},
};

export default MetroDropdown;
