/*
  Pill Box

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ToggleButtonGroup, ToggleButton } from "@material-ui/lab";
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
  const [selectedHashtag, setSelectedHashtag] = useState(null);

  const handleChange = (event, hashtag) => {
    setSelectedHashtag(hashtag);
  };

  useEffect(() => {
    if (!hashtags || !hashtags.length) {
      fetchHashtags();
    }
  });

  return (
    <>
      {hashtags.map((hashtag) => (
        <ToggleButtonGroup
          size="small"
          value={selectedHashtag}
          exclusive
          onChange={handleChange}
          key={hashtag.id}
        >
          <ToggleButton
            name="radio"
            value={hashtag.id}
            border={1}
            className={classes.pill}
          >
            {hashtag.hashtag}
          </ToggleButton>
        </ToggleButtonGroup>
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
