import React from 'react';
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function ImageForm() {
    const dispatch = useDispatch();
    const [inputImage, setInputImage] = useState({ art_item_id: '', url: '', featured_image: 'false'});

//   useEffect(() => {
//       dispatch({ type: 'FETCH_PROFILE' });
//       dispatch({ type: 'FETCH_GALLERY' });
//     }, []);

    const handleImageSubmit = (event) => {
        console.log("Url input is:", inputImage.url);
        console.log("Featured_image input is:", inputImage.featured_image);
        console.log("Art_item_id input is:", inputImage.art_item_id);
        event.preventDefault();

        dispatch({
            type: 'ADD_PICTURE',
            payload: inputImage
        })
        setInputImage('');
    };

    return (
    
    <form onSubmit={handleImageSubmit}>

        <input onChange={(event) => setInputImage({ ...inputImage, art_item_id: event.target.value })}
                type='text' placeholder='art_item_id!' value={inputImage.art_item_id} />
            
        <input onChange={(event) => setInputImage({ ...inputImage, url: event.target.value })}
            type='text' placeholder='Url!' value={inputImage.url} />
                            
        <input onChange={(event) => setInputImage({ ...inputImage, featured_image: event.target.value })}
            type='text' placeholder='Give a description!' value={inputImage.featured_image} />
                                
        <button onClick={handleImageSubmit} type="submit" value="Submit">Submit Image</button>
    </form>
    )
}
export default ImageForm;