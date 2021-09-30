import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from "react";
// import { NavLink } from 'react-router-dom';
// import CSS for the profile here
// import { useHistory } from 'react-router';



function PostsByArtist() {
    
    const dispatch = useDispatch();
    const profile = useSelector(store => store.profile);
    console.log('This is the data for one user:', profile)
    
    useEffect(() => {
        dispatch({ type: 'FETCH_PROFILE' });
    }, []);
  return (
    <div className="container">
          <main>
            <p>Hello {profile.profile_name} welcome to your profile!</p>
            <section className="postbyartist">
                        <>
                        <p>Below are your current posts!</p>
                        
                      {profile.map(artist => {
                          return(
                        <div className="galleryItem" key={artist.id}>
                           
                            
                            <img src={artist.images[0].url} alt={artist.title}
                                // onClick={() => history.push(`/details/${item.id}`)}
                            />
                            <h4>{artist.title} by {artist.profile_name}</h4>
                            <p>{artist.description}</p>
                            <p>Created on: {artist.date}</p>
                            <p>Latitude: {artist.latitude}</p>
                            <p>Longitude: {artist.longitude}</p>
                              </div>
                          )
             })}
             </>
            </section>
        </main>
    </div>
  );
}

export default PostsByArtist;