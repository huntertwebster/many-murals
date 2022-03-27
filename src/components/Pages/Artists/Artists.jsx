import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Artists.css";
import Typography from "@mui/material/Typography";

// MUI
import Grid from "@mui/material/Grid";
import { Container, Paper } from "@mui/material";

function Artists() {
  const artists = useSelector((store) => store.artists);

  console.log("These are the artists", artists);

  return (
    <Container>
      <h1>Our Artists</h1>
      <Grid container spacing={3} justify="center" alignItems="center">
        {artists.map((artist) => (
          <Grid item key={artist.id} xs={12} sm={6} md={4} lg={3}>
            <Paper elevation={0}>
              <Typography variant="h5">Meet {artist.name}!</Typography>
              <img
                className="imageOfArtist"
                src={artist.profile_image}
                alt={artist.name}
                style={{ width: "100%" }}
              />
              <Typography variant="p">{artist.description}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Artists;
