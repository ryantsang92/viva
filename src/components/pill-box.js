/*
  Pill Box

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import { ToggleButtonGroup, ToggleButton } from "@material-ui/lab";
import ScrollMenu from "react-horizontal-scrolling-menu";
import PropTypes from "prop-types";
import "./PillBox.css";

const useStyles = makeStyles({
  pill: {
    marginLeft: 2,
    marginRight: 2,
    borderRadius: "15px",
    backgroundColor: "#F2F2F2",
    color: "#333333",
  },
  scrollMenu: {
    width: "85vw",
  },
});

const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>;
};

const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

const PillBox = ({
  hashtags,
  selectedHashtag,
  fetchHashtags,
  fetchSelectedHashtag,
}) => {
  const classes = useStyles();
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (!hashtags || !hashtags.length) {
      fetchHashtags();
    }
    console.log("here");
  }, [hashtags]);

  const hashtagComponents = (hashtags) => {
    return hashtags.map((hashtag) => (
      <ToggleButtonGroup
        size="small"
        value={selectedHashtag}
        exclusive
        onChange={handleChange}
        key={hashtag.id}
      >
        <ToggleButton
          name="radio"
          value={hashtag}
          border={1}
          className={classes.pill}
        >
          {hashtag.hashtag}
        </ToggleButton>
      </ToggleButtonGroup>
    ));
  };

  const handleChange = (event, hashtag) => {
    fetchSelectedHashtag(hashtag);
  };

  const onSelect = (selected) => {
    console.log('onSelect');
    console.log(selected);
    setSelected(selected);
  };

  return (
    <Box className={classes.scrollMenu}>
      <ScrollMenu
        data={hashtagComponents(hashtags)}
        clickWhenDrag={false}
        arrowLeft={ArrowLeft}
        arrowRight={ArrowRight}
        selected={selected}
        onSelect={onSelect}
      />
    </Box>
  );
};

PillBox.propTypes = {
  hashtags: PropTypes.array,
  fetchHashtags: PropTypes.func,
  fetchSelectedHashtag: PropTypes.func,
};

PillBox.defaultProps = {
  hashtags: [],
  fetchHashtags() {},
  fetchSelectedHashtag() {},
};

export default PillBox;
