/*
  App root

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import { useState, useEffect } from "react";

export const getWindowWidth = () => {
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

  return width;
};