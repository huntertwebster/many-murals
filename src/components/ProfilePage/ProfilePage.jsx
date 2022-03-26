import React from "react";
import { useDispatch } from "react-redux";
import Form from "../forms/form";
import MyMurals from "../MyMurals/MyMurals";
import ImageForm from "../forms/addImageForm";
import DeleteImage from "../DeleteImage/DeleteImage";
import ImageComponent from "../imageComponent/imageComponent";
// import CSS for the profile here

function ProfilePage() {
  return (
    <div className="container">
      <ImageComponent />
      <MyMurals />
      <DeleteImage />
    </div>
  );
}

export default ProfilePage;
