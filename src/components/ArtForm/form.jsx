import React from 'react';
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { useEffect} from 'react';
function Form() {
    const dispatch = useDispatch();
    const [inputPost, setInputPost] = useState({ title: '', latitude: '', longitude: '', description: '', date: '', url: '', featured_image: false });

  useEffect(() => {
      dispatch({ type: 'FETCH_PROFILE' });
      dispatch({ type: 'FETCH_GALLERY' });
    }, []);

    const handleSubmit = (event) => {
        console.log("Title input is:", inputPost.title);
        console.log("Latitude input is:", inputPost.latitude);
        console.log("Longitude input is:", inputPost.longitude);
        console.log("Description input is:", inputPost.description);
        console.log("Date input is:", inputPost.date);
        console.log("Url input is:", inputPost.url);
        console.log("Featured_image input is:", inputPost.featured_image);
        console.log("Description input is:", inputPost.description);
        event.preventDefault();

       dispatch({
            type: 'ADD_POST',
            payload: inputPost
        })
        setInputPost('');
        // history.push('/')
    };

    return (
    
    <form onSubmit={handleSubmit}>
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

        <input onChange={(event) => setInputPost({ ...inputPost, url: event.target.value })}
            type='text' placeholder='Url!' value={inputPost.url} />
                            
        <input onChange={(event) => setInputPost({ ...inputPost, featured_image: event.target.value })}
            type='text' placeholder='Give a description!' value={inputPost.featured_image} />
                                
        {/* button to submit post */}
        <button onClick={handleSubmit} type="submit" value="Submit">Submit</button>
    </form>
    )
}
export default Form;