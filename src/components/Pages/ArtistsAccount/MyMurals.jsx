import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

//MUI
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

function MyMurals() {
  const moment = require("moment");
  const history = useHistory();
  const dispatch = useDispatch();
  const profile = useSelector((store) => store.profile);
  console.log("This is the data for one user:", profile);

  // deletes the entire post and image associated with it
  function deleteHandler(post) {
    console.log("This is my post that I want to delete:", post);
    dispatch({
      type: "DELETE_POST",
      payload: {
        id: post.id,
        user_id: post.user_id,
      },
    });
  }

  return (
    <Container>
      <Typography variant="h5">Welcome to your profile!</Typography>
      <Typography>
        Below are your current posts.
        <br />
        <br />
        <Button
          style={{ float: "right", fontFamily: "Cormorant Garmond" }}
          varitant="text"
          color="inherit"
          startIcon={<AddIcon />}
          onClick={() => history.push(`/create`)}
          type="submit"
          value="Submit"
          size="small"
        >
          Create a Post
        </Button>
      </Typography>

      <Grid container spacing={3} justify="center" alignItems="center">
        {profile.map((post) => (
          <Grid item key={post.id} xs={12} sm={6} md={4} lg={3}>
            <Paper elevation={0}>
              <img
                src={post?.images[0]?.url}
                alt={"Please upload an image of your mural!"}
              />
              <Typography variant="h6">
                {post.title} {post.profile_name}
              </Typography>

              <Typography variant="p">
                {post.description}
                <br />
                Created {moment(`${post.date}`).fromNow()}
                <br />
              </Typography>

              <Button
                color="inherit"
                style={{ fontFamily: "Cormorant Garamond" }}
                startIcon={<DeleteIcon />}
                size="small"
                onClick={() => deleteHandler(post)}
              >
                Delete this post
              </Button>

              <Button
                style={{ fontFamily: "Cormorant Garamond" }}
                color="inherit"
                size="small"
                startIcon={<EditIcon />}
                onClick={() => history.push(`/edit/${post.id}`)}
              >
                Edit this post
              </Button>

              <Button
                size="small"
                style={{ fontFamily: "Cormorant Garamond" }}
                color="inherit"
                startIcon={<AddIcon />}
                onClick={() => history.push(`/addImage/${post.id}`)}
                type="submit"
                value="Submit"
              >
                Add an Image
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default MyMurals;
