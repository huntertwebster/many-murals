import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useScript } from "../../../hooks/useScript";
import "./addImageForm.css";
//MUI
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

function ImageForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [inputImage, setInputImage] = useState({
    url: "",
    featured_image: "false",
  });
  const gallery = useSelector((store) => store.gallery);

  // GALLERY: using paramaters
  let params = useParams();
  console.log("these be the params:", params);
  let addImageId = params.addImageId;
  console.log(addImageId);
  // let item = gallery.find(item => item.id === Number(addImageId));
  // console.log(`found post to add image to: `, item);

  const handleImageSubmit = (event) => {
    console.log("Url input is:", inputImage.url);
    console.log("Featured_image input is:", inputImage.featured_image);
    console.log("Art_item_id input is:", inputImage.art_item_id);
    event.preventDefault();

    dispatch({
      type: "ADD_PICTURE",
      payload: {
        art_item_id: addImageId,
        url: inputImage.url,
        featured_image: inputImage.featured_image,
      },
    });
    setInputImage({ url: "", featured_image: "false" });
    history.push("/profile");
  };

  //cloudinary - open widget
  const openWidget = () => {
    // Currently there is a bug with the Cloudinary <Widget /> component
    // where the button defaults to a non type="button" which causes the form
    // to submit when clicked. So for now just using the standard widget that
    // is available on window.cloudinary
    // See docs: https://cloudinary.com/documentation/upload_widget#look_and_feel_customization
    !!window.cloudinary &&
      window.cloudinary
        .createUploadWidget(
          {
            sources: ["local", "url", "camera"],
            cloudName: process.env.REACT_APP_CLOUDINARY_NAME,
            uploadPreset: process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET,
          },
          (error, result) => {
            if (!error && result && result.event === "success") {
              // When an upload is successful, save the uploaded URL to local state!
              setInputImage({ ...inputImage, url: result.info.secure_url });
            }
          }
        )
        .open();
  };

  return (
    <div className="addImage">
      {useScript("https://widget.cloudinary.com/v2.0/global/all.js")}
      <Typography variant="h6">Add an image to your post!</Typography>
      <br />
      <form onSubmit={handleImageSubmit}>
        {/*  */}
        {/* <TextField
                required
          id="filled-textarea"
          label="Do you want this displayed first?"
          placeholder="Do you want this to be the cover?"
          variant="filled"
          onChange={(event) => setInputImage({ ...inputImage, featured_image: event.target.value })}
          value={inputImage.featured_image}
                /> */}

        <br />

        <Button
          style={{ fontFamily: "Cormorant Garamond" }}
          color="inherit"
          startIcon={<InsertPhotoIcon />}
          onClick={openWidget}
          type="button"
          value="Submit"
          size="small"
        >
          Choose File
        </Button>
        <br />
        {inputImage.url && (
          <p>
            The mural you're uploading: <br />{" "}
            <img src={inputImage.url} width={100} />
          </p>
        )}

        {/* button to submit image  */}
        <Button
          style={{ fontFamily: "Cormorant Garamond" }}
          color="inherit"
          startIcon={<SendIcon />}
          onClick={handleImageSubmit}
          type="submit"
          value="Submit"
          size="small"
        >
          Submit
        </Button>

        {/* <button onClick={handleImageSubmit} type="submit" value="Submit">Submit Image</button> */}
      </form>
    </div>
  );
}
export default ImageForm;
