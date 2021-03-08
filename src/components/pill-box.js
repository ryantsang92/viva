/*
  Pill Box

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useState, useEffect } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import PropTypes from "prop-types";

const PillBox = ({ hashtags, fetchHashtags }) => {
  const [radioValue, setRadioValue] = useState(null);

  useEffect(() => {
    if (!hashtags || !hashtags.length) {
      fetchHashtags();
    }
  });

  return (
    <>
      <ButtonGroup toggle>
        {hashtags.map((radio, idx) => (
          <ToggleButton
            key={idx}
            type="radio"
            variant="secondary"
            name="radio"
            value={radio.id}
            checked={radioValue === radio.id}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
            className="ml-2 rounded-pill"
          >
            {radio.hashtag}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </>
  );
};

PillBox.propTypes = {
  hashtags: PropTypes.array,
};

PillBox.defaultProps = {
  hashtags: [],
};

export default PillBox;
