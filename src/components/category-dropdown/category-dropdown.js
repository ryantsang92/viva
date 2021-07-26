/*
  Header component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useEffect } from "react";
import { Select, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
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
    },
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
    },
  },
}));

const CategoryDropdown = ({
  selectedCategory,
  fetchSelectedCategory,
  clearSelectedCategory,
  isMobile,
  categories,
  fetchCategories,
  setRefresh,
  closePlacePanels,
}) => {
  const classes = useStyles();

  useEffect(() => {
    if (!categories || !categories.length) {
      fetchCategories();
    }
  }, [categories, fetchCategories]);

  const handleChange = (event) => {
    // update redux store
    closePlacePanels();
    if (event.target.value === "What's New") {
      clearSelectedCategory();
    } else {
      fetchSelectedCategory(event.target.value);
      window.scrollTo(0, 0);
      setRefresh();
    }
  };

  return (
    <Select
      labelId="category-picker-label"
      id="category-picker"
      value={selectedCategory || "What's Hot"}
      onChange={handleChange}
      className={isMobile ? classes.mobileSelectBox : classes.selectBox}
    >
      <MenuItem value={"What's Hot"}>What's Hot</MenuItem>
      {categories.map((category) => (
        <MenuItem value={category} key={category.id}>
          {category.category}
        </MenuItem>
      ))}
    </Select>
  );
};

CategoryDropdown.propTypes = {
  selectedLocation: PropTypes.string,
  isMobile: PropTypes.bool,
  categories: PropTypes.array,
  fetchSelectedCategory: PropTypes.func,
  clearSelectedCategory: PropTypes.func,
  fetchCategories: PropTypes.func,
  closePlacePanels: PropTypes.func,
};

CategoryDropdown.defaultProps = {
  selectedLocation: null,
  isMobile: false,
  categories: [],
  fetchSelectedCategory() {},
  clearSelectedCategory() {},
  fetchCategories() {},
  closePlacePanels() {},
};

export default CategoryDropdown;
