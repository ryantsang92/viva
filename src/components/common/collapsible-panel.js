/*
  Yelp reviews component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useEffect } from "react";
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PropTypes from "prop-types";

const CollapsiblePanel = ({ description, title, content }) => {
  const [expanded, setExpanded] = React.useState(true);

  useEffect(() => {
    setExpanded(true);
  }, [content]);

  const openPanel = () => {
    setExpanded(!expanded);
  };

  return (
    <Accordion expanded={expanded} onChange={openPanel}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={description + "-bh-content"}
        id={description + "-bh-header"}
      >
        <Box pb={1}>{title}</Box>
      </AccordionSummary>
      <AccordionDetails>
        <div>{content}</div>
      </AccordionDetails>
    </Accordion>
  );
};

CollapsiblePanel.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
};

CollapsiblePanel.defaultProps = {
  description: null,
  title: null,
  content: null,
};

export default CollapsiblePanel;
