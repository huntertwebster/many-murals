import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import DeleteImage from "../DeleteImage/DeleteImage";
import "../EditPage/EditPage.css";
// MUI
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { width } from "@mui/system";
function EditPost() {
  const dispatch = useDispatch();
  const history = useHistory();
  const gallery = useSelector((store) => store.gallery);
  const profile = useSelector((store) => store.profile);
  // const artists = useSelector(store = store.artists);
  let params = useParams();
  console.log("these be the params:", params);

  useEffect(() => {
    dispatch({ type: "FETCH_PROFILE" });
    dispatch({ type: "FETCH_GALLERY" });
  }, []);

  // GALLERY: using paramaters
  let editId = params.editId;
  console.log(editId);
  let item = gallery.find((item) => item.id === Number(editId));
  console.log(`found item to edit: `, item);
  const imageId = item?.images[0].id;
  const image = item?.images[0];
  // const imageUrl = item?.images[0].url;
  console.log("this is the WHOLE IMAGE:", image);
  console.log("this is the image ID:", imageId);
  console.log("this is the art_item_id:", item?.id);

  //    Bail out early with a message if the item isnt found
  // if (!item) {
  //         return <h2>Invalid Art Item ID</h2>;
  //     }

  const [editPost, setEditPost] = useState({
    title: item?.title,
    latitude: item?.latitude,
    longitude: item?.longitude,
    description: item?.description,
    date: item?.date,
  });
  // create a map to look over all the images when there are multiple images to be able to update multiple

  // edits the post
  function editHandler() {
    dispatch({
      type: "EDIT_POST",
      payload: {
        id: item.id,
        title: editPost.title,
        latitude: editPost.latitude,
        longitude: editPost.longitude,
        description: editPost.description,
        date: editPost.date,
      },
    });
    history.push("/profile");
  }

  return (
    <div className="editForm">
      <Typography style={{ textAlign: "center" }} variant="h5" color="initial">
        Edit your post!
      </Typography>
      <br />
      <form onSubmit={editHandler}>
        <Grid container spacing={{ xs: 2, sm: 2, md: 2, lg: 2, xl: 2 }}>
          <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
            {/* edit title */}
            <TextField
              fullWidth
              id="outlined-textarea"
              label="Title"
              placeholder="Edit your mural's title.."
              multiline
              variant="outlined"
              onChange={(event) =>
                setEditPost({ ...editPost, title: event.target.value })
              }
              value={editPost.title}
            />
          </Grid>
          <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
            {/* edit latitude */}
            <TextField
              fullWidth
              id="outlined-textarea"
              label="Latitude"
              placeholder="Edit the latitude.."
              multiline
              variant="outlined"
              onChange={(event) =>
                setEditPost({ ...editPost, latitude: event.target.value })
              }
              value={editPost.latitude}
            />
          </Grid>
          <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
            {/* edit longitude */}
            <TextField
              fullWidth
              id="outlined-textarea"
              label="Longitude"
              placeholder="Edit the longitude.."
              multiline
              variant="outlined"
              onChange={(event) =>
                setEditPost({ ...editPost, longitude: event.target.value })
              }
              value={editPost.longitude}
            />
          </Grid>

          <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
            {/* edit date */}
            <TextField
              fullWidth
              id="outlined-textarea"
              label="Date"
              placeholder="Edit the date of creation.."
              multiline
              variant="outlined"
              onChange={(event) =>
                setEditPost({ ...editPost, date: event.target.value })
              }
              value={editPost.date}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            {/* edit description */}
            <TextField
              fullWidth
              id="outlined-multiline-static"
              label="Description"
              placeholder="Edit the description of your mural..."
              multiline
              rows={4}
              type="text"
              variant="outlined"
              onChange={(event) =>
                setEditPost({ ...editPost, description: event.target.value })
              }
              value={editPost.description}
            />
          </Grid>
          <br />
          <br />
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            {/* edit button */}
            <Button
              color="inherit"
              startIcon={<SendIcon />}
              type="submit"
              value="Submit"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
export default EditPost;
