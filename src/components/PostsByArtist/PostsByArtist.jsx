import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from "react";
// import { NavLink } from 'react-router-dom';
// import CSS for the profile here
import { useHistory } from 'react-router';


function PostsByArtist() {
  const history = useHistory();
  const dispatch = useDispatch();
  const profile = useSelector(store => store.profile);
  console.log('This is the data for one user:', profile)
    
    useEffect(() => {
        dispatch({ type: 'FETCH_PROFILE' });
    }, []);
  
  
  function deleteHandler(post) {
    console.log('This is my post:' , post)
        dispatch({
            type: 'DELETE_POST',
          payload: {
            id: post.id,
            user_id: post.user_id
            }
        })
  }



  function navToEditPage() {
    history.push('/edit');
  }
  
  return (
    <div className="container">
          <main>
            <h1>Hello {profile.profile_name} welcome to your profile!</h1>
            <section className="postbyartist">
                        <>
                        <p>Below are your current posts!</p>
                        
                      {profile.map(post => {
                        return (
                          <>
                            <div className="galleryItem" key={post.id}>
                              <img src={post.images[0].url} alt={post.title}
                              // onClick={() => history.push(`/details/${item.id}`)}
                              />
                              <h4>{post.title} by {post.profile_name}</h4>
                              <p>{post.description}</p>
                              <p>Created on: {post.date}</p>
                              <p>Latitude: {post.latitude}</p>
                              <p>Longitude: {post.longitude}</p>
                            </div>
                            <button onClick={() => deleteHandler(post)}>Delete</button>
                            <button onClick={() => navToEditPage()}>Edit</button>
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