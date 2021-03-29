/*
  Pill Box

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  pill: {
    marginLeft: 2,
    marginRight: 2,
    borderRadius: "15px",
    backgroundColor: "#F2F2F2",
    color: "#333333",
  },
});

const PillBox = ({ hashtags, fetchHashtags }) => {
  const classes = useStyles();
  const [radioValue, setRadioValue] = useState(null);

  useEffect(() => {
    if (!hashtags || !hashtags.length) {
      fetchHashtags();
    }
  });

  return (
    <>
      {hashtags.map((hashtag) => (
        <ButtonGroup toggle key={hashtag.id}>
          <ToggleButton
            type="radio"
            variant="secondary"
            name="radio"
            value={hashtag.id}
            checked={radioValue === hashtag.id}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
            border={1}
            className={classes.pill}
          >
            {hashtag.hashtag}
          </ToggleButton>
        </ButtonGroup>
      ))}
    </>
  );
};

PillBox.propTypes = {
  hashtags: PropTypes.array,
  fetchHashtags: PropTypes.func,
};

PillBox.defaultProps = {
  hashtags: [],
  fetchHashtags() {},
};

export default PillBox;
