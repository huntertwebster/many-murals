import React from "react";
import { useSelector } from "react-redux";

function ImageComponent() {
  const profile = useSelector((store) => store.profile);
  console.log("This is the data for one image:", profile);

  return (
    <div className="imageContainer">
      {profile.map((post) => {
        <div className="galleryItem" key={post.id}>
          <img src={post?.images[0]?.url} alt={post?.title} />
        </div>;
      })}
    </div>
  );
}

export default ImageComponent;
