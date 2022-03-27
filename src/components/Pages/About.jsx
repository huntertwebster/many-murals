import React from "react";

// MUI
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";

function About() {
  return (
    <Container>
      <div>
        <Typography variant="h3">
          Welcome to <em>Many Murals</em>
        </Typography>

        <br />

        <Typography variant="h5">
          There are so many murals in the Fargo/Moorhead area, yet not a great
          method of finding them. Many Murals is meant to make the process of
          finding the mural and the local artists that do them, an easy and
          enjoyable one. To find the location of a mural, tap on the image of
          your choice in the gallery to open google maps and start exploring.
        </Typography>
      </div>
    </Container>
  );
}

export default About;
