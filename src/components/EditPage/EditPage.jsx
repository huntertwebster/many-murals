import React from 'react';
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router';


function EditPost() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [inputPost, setInputPost] = useState({ title: '', latitude: '', longitude: '', description: '', date: '', type: 'mural', url: '', featured_image: false });


  function editHandler(post) {
    console.log('This is my post:' , post )
        dispatch({
            type: 'UPDATE_POST',
          payload: {
              title: inputPost.title,
              latitude : inputPost.latitude,
              longitude: inputPost.longitude,
              description : inputPost.description,
              date: inputPost.date,
              type : inputPost.type,
            //   url : url,
            //   featured_image : featured_image
            }
        })
    // history.push('/profile');
  }
    
 useEffect(() => {
      dispatch({ type: 'FETCH_PROFILE' });
      dispatch({ type: 'FETCH_GALLERY' });
 }, []);
    
    
    return (
        <div>
            <p>Edit your post!</p>
            <form onSubmit={editHandler}>
                {/* create a form for my post */}
                <input onChange={(event) => setInputPost({ ...inputPost, title: event.target.value })}
                    type='text' placeholder='Title!' value={inputPost.title} />
                            
                <input onChange={(event) => setInputPost({ ...inputPost, latitude: event.target.value })}
                    type='text' placeholder='Latitude!' value={inputPost.latitude} />
                            
                <input onChange={(event) => setInputPost({ ...inputPost, longitude: event.target.value })}
                    type='text' placeholder='Longitude!' value={inputPost.longitude} />
                            
                <input onChange={(event) => setInputPost({ ...inputPost, description: event.target.value })}
                    type='text' placeholder='Description!' value={inputPost.description} />
                            
                <input onChange={(event) => setInputPost({ ...inputPost, date: event.target.value })}
                    type='text' placeholder='Date!' value={inputPost.date} />
                                
                <input onChange={(event) => setInputPost({ ...inputPost, type: event.target.value })}
                    type='text' placeholder='What type of art?' value={inputPost.type} />

                {/* <input onChange={(event) => setInputPost({ ...inputPost, url: event.target.value })}
                    type='text' placeholder='Url!' value={inputPost.url} />
                            
                <input onChange={(event) => setInputPost({ ...inputPost, featured_image: event.target.value })}
                    type='text' placeholder='Give a description!' value={inputPost.featured_image} /> */}
                                
                {/* button to submit post */}
                <button onClick={editHandler} type="submit" value="Submit">Edit</button>
            </form>
        </div>
    );
}
export default EditPost;