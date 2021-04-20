import React, { useState } from "react";
// import { FaArrowCircleUp } from "react-icons/fa";
// import { Button } from "./Styles";
import { IconButton } from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { makeStyles } from "@material-ui/core/styles";

// to-do: find a better way to style this
const useStyles = makeStyles({
  button: {
    position: "absolute",
    width: "100%",
    // left: "50%",
    bottom: 40,
    height: 20,
    fontSize: "3rem",
    zIndex: 10,
    cursor: "pointer",
    color: "green",
  },
});

const ScrollToTop = () => {
  const classes = useStyles();
  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop)

  console.log(showScroll);
  return (
    <IconButton onClick={scrollTop} size="small" className={classes.button}>
     {/* <IconButton onClick={scrollToTop} size="small"> */}
      {/* <ArrowUpwardIcon style={{ display: visible ? "inline" : "none" }} /> */}
      <ArrowUpwardIcon style={{ display: "inline"}} />
    </IconButton>
  );
};

export default ScrollToTop;
