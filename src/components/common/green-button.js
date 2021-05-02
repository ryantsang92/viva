/*
  Green button component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  button: {
    textTransform: "none",
    textDecoration: "none",
    boxShadow: "none",
    "&:focus, &:hover, &:visited, &:link, &:active": {
      color: "#FFFFFF",
      textDecoration: "none",
      boxShadow: "none",
    },
    backgroundColor: "#228B6E",
      "&:hover": {
        backgroundColor: "#228b8b",
      },
      height: 30,
  },
});

const GreenButton = ({ buttonText, onClick, href }) => {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={onClick}
      href={href}
      rel={href ? "noreferrer" : null}
      target={href ? "_blank" : null}
      className={classes.button}
    >
      {buttonText}
    </Button>
  );
};

GreenButton.propTypes = {
  buttonText: PropTypes.string,
  onClick: PropTypes.func,
  href: PropTypes.string,
};

GreenButton.defaultProps = {
  buttonText: "",
  href: null,
  onClick() {},
};

export default GreenButton;
