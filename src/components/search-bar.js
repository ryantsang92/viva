import React from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Box from "@material-ui/core/Box";
import SearchIcon from "@material-ui/icons/Search";

function SearchBar() {
  return (
    <Box mx={20}>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search..."
          aria-label="Search..."
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <Button variant="outline-secondary">
            <SearchIcon />
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Box>
  );
}

export default SearchBar;
