import React from 'react';
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

//MUI
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import Button from '@mui/material/Button';

function ImageForm() {
    const dispatch = useDispatch();
    const [inputImage, setInputImage] = useState({ art_item_id: '', url: '', featured_image: 'false'});


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
        {/* Art Item ID */}
        <TextField
          id="filled-textarea"
          label="Art Item ID"
          placeholder="Insert the art item Id.."
          variant="filled"
          onChange={(event) => setInputImage({ ...inputImage, art_item_id: event.target.value })}
          value={inputImage.art_item_id}
        />       
        {/* <input onChange={(event) => setInputImage({ ...inputImage, art_item_id: event.target.value })}
                type='text' placeholder='art_item_id!' value={inputImage.art_item_id} /> */}
            
        {/* Url */}
        <TextField
          id="filled-textarea"
          label="Url"
          placeholder="Insert the url.."    
          multiline
          variant="filled"
          onChange={(event) => setInputImage({ ...inputImage, url: event.target.value })}
          value={inputImage.url}
        />       
        {/* <input onChange={(event) => setInputImage({ ...inputImage, url: event.target.value })}
                type='text' placeholder='Url!' value={inputImage.url} /> */}
            
        {/* Featured Image  */}
        <TextField
          id="filled-textarea"
          label="Your featured image.."
          placeholder="Do you want this to be the cover?"
          variant="filled"
          onChange={(event) => setInputImage({ ...inputImage, featured_image: event.target.value })}
          value={inputImage.featured_image}
        />       
        {/* <input onChange={(event) => setInputImage({ ...inputImage, featured_image: event.target.value })}
            type='text' placeholder='Give a description!' value={inputImage.featured_image} /> */}

        {/* button to submit image  */}
         <Button
        variant="outlined"
        color="inherit"
        startIcon={<InsertPhotoIcon />}
        onClick={handleImageSubmit}
        type="submit"
        value="Submit"
        >
        Submit Image
        </Button>
        
        {/* <button onClick={handleImageSubmit} type="submit" value="Submit">Submit Image</button> */}
    </form>
    )
}
export default ImageForm;