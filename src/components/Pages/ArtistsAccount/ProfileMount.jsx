import React from "react";
import MyMurals from "./MyMurals";
import DeleteImage from "../../Images/DeleteImage";
import Image from "../../Images/Image";

function ProfilePage() {
  return (
    <div className="container">
      <Image />
      <MyMurals />
      <DeleteImage />
    </div>
  );
}

export default ProfilePage;
