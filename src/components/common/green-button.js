/*
  Green button component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React from "react";
import { Button } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  normalText: {
    textTransform: "none",
  },
});

const GreenButton = ({ buttonText, onClick }) => {
  const classes = useStyles();

  const ThemeButton = withStyles({
    root: {
      backgroundColor: "#228B6E",
      "&:hover": {
        backgroundColor: "#228b8b",
      },
      height: 30,
    },
  })(Button);

  return (
    <ThemeButton
      variant="contained"
      color="primary"
      onClick={onClick}
      className={classes.normalText}
    >
      {buttonText}
    </ThemeButton>
  );
};

GreenButton.propTypes = {
  buttonText: PropTypes.string,
  onClick: PropTypes.func,
};

GreenButton.defaultProps = {
  buttonText: "",
  onClick() {},
};

export default GreenButton;
