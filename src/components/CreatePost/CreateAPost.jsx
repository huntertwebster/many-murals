import React from "react";
import { useDispatch } from "react-redux";
import Form from "../ArtForm/form";
import ImageForm from "../ArtForm/imageForm";
// import CSS for the profile here

import Box from "@mui/material/Box";

function CreateAPost() {
  const dispatch = useDispatch();

  return (
    <div className="container">
      <Box>
        <Form />
      </Box>
    </div>
  );
}

export default CreateAPost;
