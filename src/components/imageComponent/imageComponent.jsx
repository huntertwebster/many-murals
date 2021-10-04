import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from "react";
// import { NavLink } from 'react-router-dom';
// import CSS for the profile here
import { useHistory } from 'react-router';

//MUI



function ImageComponent() {
  const history = useHistory();
  const profile = useSelector(store => store.profile);
  console.log('This is the data for one image:', profile)



  
  return (
    <div className="imageContainer">
        {profile.map(post => {
            <div className="galleryItem" key={post.id}>
                <img src={post?.images[0]?.url} alt={post?.title}/>
            </div>
        })}
    </div>
  );
}

export default ImageComponent;