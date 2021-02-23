import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

function PillBox({ buttonTitles }) {
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

export default PillBox;
