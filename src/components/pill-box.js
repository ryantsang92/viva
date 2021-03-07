/*
  Pill Box

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import PropTypes from "prop-types";

const PillBox = ({ buttonTitles }) => {
  const [radioValue, setRadioValue] = useState(null);

  return (
    <>
      <ButtonGroup toggle>
        {buttonTitles.map((radio, idx) => (
          <ToggleButton
            key={idx}
            type="radio"
            variant="secondary"
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
            className="ml-2 rounded-pill"
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </>
  );
}

PillBox.propTypes = {
  buttonTitles: PropTypes.array,
};

PillBox.defaultProps = {
  buttonTitles: [],
};

export default PillBox;
