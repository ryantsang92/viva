/*
  Pill box component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import { ToggleButtonGroup, ToggleButton } from "@material-ui/lab";
import ScrollMenu from "react-horizontal-scrolling-menu";
import PropTypes from "prop-types";
import "./PillBox.css";
import chevronLeft from "../../assets/chevron-left.svg";
import chevronRight from "../../assets/chevron-right.svg";

const useStyles = makeStyles({
  pill: {
    marginLeft: 0,
    marginRight: 0,
    height: 32,
    borderRadius: "25px",
    backgroundColor: "#F2F2F2",
    color: "#333333",
    padding: "8px 13px",
  },
  scrollMenu: {
    position: 'absolute',
    left: 170,
    right: 5,
  },
  scrollMenuMobile: {
    position: 'absolute',
    left: 85,
    right: 0,
  },
  arrow: {
    cursor: "pointer",
  },
});

const PillBox = ({
  hashtags,
  selectedHashtag,
  fetchHashtags,
  fetchSelectedHashtag,
}) => {
  const classes = useStyles();
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  let isMobile = width <= 768;

  const ArrowLeft = (
    <Box pr={1}>
      <img src={chevronLeft} alt="left" className={classes.arrow} />
    </Box>
  );
  const ArrowRight = (
    <Box pl={1}>
      <img src={chevronRight} alt="right" className={classes.arrow} />
    </Box>
  );

  useEffect(() => {
    if (!hashtags || !hashtags.length) {
      fetchHashtags();
    }
  }, [hashtags]);

  const hashtagComponents = (hashtags) => {
    return hashtags.map((hashtag) => (
      <Box pr={1} pl={1} key={hashtag.id}>
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
      </Box>
    ));
  };

  const handleChange = (event, hashtag) => {
    fetchSelectedHashtag(hashtag);
  };

  return (
    <Box className={isMobile ? classes.scrollMenuMobile : classes.scrollMenu}>
      <ScrollMenu
        data={hashtagComponents(hashtags)}
        clickWhenDrag={false}
        arrowLeft={isMobile ? null : ArrowLeft}
        arrowRight={isMobile ? null : ArrowRight}
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
