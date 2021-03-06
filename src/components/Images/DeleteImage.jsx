import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

//MUI
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

function DeleteImage() {
  const dispatch = useDispatch();
  const profile = useSelector((store) => store.profile);
  let params = useParams();
  console.log("these be the params:", params);

  // use a map method to look over all the images when there are multiple images to be able to update multiple

  // deletes the picutre
  function deletePicture(image) {
    console.log("This is the picture I want to delete:", image);
    dispatch({
      type: "DELETE_PICTURE",
      payload: {
        id: image[0]?.id,
        art_item_id: image[0]?.art_item_id,
      },
    });
  }

  return (
    <div>
      <br />
      <Typography variant="p">Delete your images:</Typography>

      {profile.map((post) => {
        return (
          <>
            <br />
            <Button
              style={{ fontFamily: "Cormorant Garmond" }}
              variant=" outlined "
              size="small"
              startIcon={<DeleteIcon />}
              onClick={() => deletePicture(post.images)}
            >
              {post.title}
            </Button>
            {/* <button onClick={() => deletePicture(post.images)}>Delete {post.title}'s Image</button> */}
          </>
        );
      })}
    </div>
  );
}
export default DeleteImage;
