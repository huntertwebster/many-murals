import React from "react";
import Form from "./CreateArtItemForm";

// MUI
import Box from "@mui/material/Box";

// made to make the form cleaner.
function CreateArtItem() {
  return (
    <div className="container">
      <Box>
        <Form />
      </Box>
    </div>
  );
}

export default CreateArtItem;
