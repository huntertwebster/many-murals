import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from "react";
// import { NavLink } from 'react-router-dom';
// import CSS for the profile here
import { useHistory } from 'react-router';
import DeleteImage from '../DeleteImage/DeleteImage';

//MUI
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function PostsByArtist() {
  const history = useHistory();
  const dispatch = useDispatch();
  const profile = useSelector(store => store.profile);
  console.log('This is the data for one user:', profile)

//  useEffect(() => {
//    dispatch({ type: 'FETCH_PROFILE' });
//    dispatch({ type: 'FETCH_GALLERY' });
// }, []);
  
  // deletes the entire post
  function deleteHandler(post) {
    console.log('This is my post that I want to delete:' , post)
        dispatch({
            type: 'DELETE_POST',
          payload: {
            id: post.id,
            user_id: post.user_id
            }
        })
  }


  
  return (
    <div className="container">
      <main>
        <Typography variant="h5">
         Welcome to your profile!
        </Typography>
        
            
            <section className="postbyartist">
                        <>
                        <Typography>
                        Below are your current posts.
                        </Typography>
                        
                      {profile.map(post => {
                        return (
                          <>
                            <div className="galleryItem" key={post.id}>
                              <img src={post.images[0].url} alt={post.title}
                              // onClick={() => history.push(`/details/${item.id}`)}
                              />
                              <Typography
                              variant="h6">
                                {post.title} {post.profile_name}
                              </Typography>

                              <Typography
                              variant = "p">
                                {post.description}
                                <br />
                              Created on: {post.date}
                              </Typography>

                            </div>

                            <Button
                              variant=" outlined "
                              startIcon={<DeleteIcon />}
                              size="small"
                              fontSize="small"
                              onClick={() => deleteHandler(post)}>
                              {post.title}
                            </Button>

                            <Button
                              variant=" outlined "
                            startIcon={<EditIcon />}
                              onClick={() => history.push(`/edit/${post.id}`)}>
                              {post.title}
                            </Button>

                            {/* <button onClick={() => deleteHandler(post)}>Delete {post.title}</button>
                            <button onClick={() => history.push(`/edit/${post.id}`)}>Edit {post.title}</button> */}
                            {/* <DeleteImage /> */}
                            <br />
                            <br />
                          </>
                          
                        );
                        
                      })}
                    </>
            </section>
        </main>
    </div>
  );
}

export default PostsByArtist;