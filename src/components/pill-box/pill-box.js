/*
  Pill box component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ToggleButtonGroup, ToggleButton } from "@material-ui/lab";
import PropTypes from "prop-types";
import "./PillBox.css";

const useStyles = makeStyles({
  pill: {
    marginLeft: 0,
    marginRight: 0,
    height: 32,
    backgroundColor: "transparent",
    color: "#555",
    padding: "0px 13px",
    border: "none",
    borderRadius: 0,
    fontSize: "0.95em",
  },
  arrow: {
    cursor: "pointer",
  },
});

const PillBox = ({
  categories,
  selectedCategory,
  fetchSelectedCategory,
  setRefresh,
  closePlacePanels,
}) => {
  const classes = useStyles();

  const handleChange = (event, category) => {
    setRefresh();
    closePlacePanels();
    fetchSelectedCategory(category);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <ToggleButtonGroup
        size="small"
        value={selectedCategory}
        orientation="horizontal"
        exclusive
        onChange={handleChange}
      >
        {categories.slice(0, 5).map((category) => (
          <ToggleButton
            name="radio"
            value={category}
            border={1}
            className={classes.pill}
            key={category.id}
          >
            {category.category}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </>
  );
};

PillBox.propTypes = {
  categories: PropTypes.array,
  selectedCategory: PropTypes.object,
  isMobile: PropTypes.bool,
  fetchSelectedCategory: PropTypes.func,
  setRefresh: PropTypes.func,
  closePlacePanels: PropTypes.func,
};

PillBox.defaultProps = {
  categories: [],
  selectedCategory: {},
  isMobile: false,
  fetchSelectedCategory() {},
  setRefresh() {},
  closePlacePanels() {},
};

export default PillBox;
