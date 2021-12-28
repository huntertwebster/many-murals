import React from "react";
import { useDispatch } from "react-redux";
import Form from "../ArtForm/form";
import PostsByArtist from "../PostsByArtist/PostsByArtist";
import ImageForm from "../ArtForm/imageForm";
import DeleteImage from "../DeleteImage/DeleteImage";
import ImageComponent from "../imageComponent/imageComponent";
// import CSS for the profile here

function ProfilePage() {
  const dispatch = useDispatch();

  return (
    <div className="container">
      <ImageComponent />
      <PostsByArtist />
      <DeleteImage />
    </div>
  );
}

export default ProfilePage;
