/*
  Pill box component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useEffect } from "react";
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
    padding: "0px 13px",
  },
  scrollMenu: {
    position: "absolute",
    left: 170,
    right: 5,
  },
  scrollMenuMobile: {
    position: "absolute",
    left: 100,
    right: 0,
  },
  arrow: {
    cursor: "pointer",
  },
});

const PillBox = ({
  hashtags,
  selectedHashtag,
  isMobile,
  fetchHashtags,
  fetchSelectedHashtag,
}) => {
  const classes = useStyles();

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

  const handleChange = (event, hashtag) => {
    fetchSelectedHashtag(hashtag);
    window.scrollTo(0, 0);
  };

  const hashtagComponents = (hashtags) => {
    return hashtags.map((hashtag) => (
      <Box pr={1} key={hashtag.id}>
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

  return (
    <Box className={isMobile ? classes.scrollMenuMobile : classes.scrollMenu}>
      <ScrollMenu
        data={hashtagComponents(hashtags)}
        clickWhenDrag={false}
        hideSingleArrow
        inertiaScrolling
        translate={0}
        scrollBy={2}
        arrowLeft={isMobile ? null : ArrowLeft}
        arrowRight={isMobile ? null : ArrowRight}
      />
    </Box>
  );
};

PillBox.propTypes = {
  hashtags: PropTypes.array,
  selectedHashtag: PropTypes.object,
  isMobile: PropTypes.bool,
  fetchHashtags: PropTypes.func,
  fetchSelectedHashtag: PropTypes.func,
};

PillBox.defaultProps = {
  hashtags: [],
  selectedHashtag: {},
  isMobile: false,
  fetchHashtags() {},
  fetchSelectedHashtag() {},
};

export default PillBox;
