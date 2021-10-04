import React from 'react';
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

//MUI
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import Button from '@mui/material/Button';


   
    



function ImageForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [inputImage, setInputImage] = useState({ url: '', featured_image: 'false' });
    const gallery = useSelector(store => store.gallery);


 useEffect(() => {
      dispatch({ type: 'FETCH_PROFILE' });
      dispatch({ type: 'FETCH_GALLERY' });
     }, []);

    // GALLERY: using paramaters 
    let params = useParams();
    console.log('these be the params:', params)
    let addImageId = params.addImageId; 
    console.log(addImageId);
    // let item = gallery.find(item => item.id === Number(addImageId));
    // console.log(`found post to add image to: `, item);

    const handleImageSubmit = (event) => {
        console.log("Url input is:", inputImage.url);
        console.log("Featured_image input is:", inputImage.featured_image);
        console.log("Art_item_id input is:", inputImage.art_item_id);
        event.preventDefault();

        dispatch({
            type: 'ADD_PICTURE',
            payload: {
                art_item_id: addImageId,
                url: inputImage.url,
                featured_image: inputImage.featured_image
            }
        })
        setInputImage({ url: '', featured_image: 'false' });
        history.push('/profile')
    };

    return (
        <>
    <Typography
        variant='h6'
    >
    Add an image to your post!  
    </Typography>
            
    <form onSubmit={handleImageSubmit}>
        {/* Art Item ID */}
        {/* <TextField
          id="filled-textarea"
          label="Art Item ID"
          placeholder="Insert the art item Id.."
          variant="filled"
          onChange={(event) => setInputImage({ ...inputImage, art_item_id: event.target.value })}
          value={inputImage.art_item_id}
        />        */}
         
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
            
        {/* Featured Image  */}
        <TextField
          id="filled-textarea"
          label="Your featured image.."
          placeholder="Do you want this to be the cover?"
          variant="filled"
          onChange={(event) => setInputImage({ ...inputImage, featured_image: event.target.value })}
          value={inputImage.featured_image}
        />       

        {/* button to submit image  */}
        <Button
        variant="outlined"
        color="primary"
        startIcon={<InsertPhotoIcon />}
        onClick={handleImageSubmit}
        type="submit"
        value="Submit"
        >
        Submit Image
        </Button>
        
        {/* <button onClick={handleImageSubmit} type="submit" value="Submit">Submit Image</button> */}
            </form>
            </>
    )
}
export default ImageForm;