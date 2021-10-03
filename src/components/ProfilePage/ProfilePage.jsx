import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Form from '../ArtForm/form';
import PostsByArtist from '../PostsByArtist/PostsByArtist';
import ImageForm from '../ArtForm/imageForm';
import DeleteImage from '../DeleteImage/DeleteImage';
import ImageComponent from '../imageComponent/imageComponent';
// import CSS for the profile here


function ProfilePage() {

const dispatch = useDispatch();

 useEffect(() => {
   dispatch({ type: 'FETCH_PROFILE' });
  //  dispatch({ type: 'FETCH_GALLERY' });
 }, []);
  
  return (
    <div className="container">
      <ImageComponent/>
      <PostsByArtist />
      <DeleteImage />
      <Form />
      <ImageForm /> 
    </div>
  );
}

export default ProfilePage;