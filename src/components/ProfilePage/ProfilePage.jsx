import React from 'react';
import Form from '../ArtForm/form';
import PostsByArtist from '../PostsByArtist/PostsByArtist';
// import { NavLink } from 'react-router-dom';
// import CSS for the profile here
// import { useHistory } from 'react-router';



function ProfilePage() {
  return (
      <div className="container">
          <PostsByArtist/>
          <Form/>
    </div>
  );
}

export default ProfilePage;