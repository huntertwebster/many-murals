import React from "react";
import Form from "./Forms/form";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import { NavLink } from 'react-router-dom';
// import CSS for the profile here
// import { useHistory } from 'react-router';

// MUI
import Grid from "@mui/material/Grid";
import { Button, Container, Paper } from "@mui/material";

function AdminView() {
  const history = useHistory();
  const dispatch = useDispatch();
  const params = useParams();

  // stores
  const artists = useSelector((store) => store.artists);
  const gallery = useSelector((store) => store.gallery);
  const profile = useSelector((store) => store.profile);

  // filter
  // const result = gallery.filter(item => artists.some(artist => item.id === artist.id))
  // console.log('This is the number of items in the gallery:', Number(result));

  // function to delete artist
  function deleteArtist(id) {
    console.log("This is the artist:", id);
    dispatch({
      type: "DELETE_ARTIST",
      payload: id,
    });
  }

  return (
    <Container>
      <p>hello, admin!</p>
      <p>below are all the artists</p>
      <Grid
        container
        spacing={3}
        justify="center"
        alignItems="center"
        className="artists"
      >
        {artists.map((artist) => (
          <Grid item key={artist.id} xs={12} sm={6} md={4} lg={3}>
            {/* display the number of items each artist has */}
            <Button
              variant="contained"
              color="error"
              style={{ fontFamily: "Cormorant Garamond" }}
              onClick={() => deleteArtist(artist.id)}
            >
              Delete {artist.name}'s profile
            </Button>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default AdminView;
