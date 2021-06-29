/*
  Common horizontal scroll menu component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import ScrollMenu from "react-horizontal-scrolling-menu";
import PropTypes from "prop-types";
import chevronLeft from "../../assets/chevron-left.svg";
import chevronRight from "../../assets/chevron-right.svg";

const useStyles = makeStyles({
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

const HorizontalScrollMenu = ({ data, isMobile }) => {
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

  return (
    <ScrollMenu
      data={data}
      clickWhenDrag={false}
      hideArrows
      hideSingleArrow
      inertiaScrolling
      translate={0}
      scrollBy={2}
      arrowLeft={isMobile ? null : ArrowLeft}
      arrowRight={isMobile ? null : ArrowRight}
    />
  );
};

HorizontalScrollMenu.propTypes = {
  data: PropTypes.array,
  isMobile: PropTypes.bool,
};

HorizontalScrollMenu.defaultProps = {
  data: [],
  isMobile: false,
};

export default HorizontalScrollMenu;
