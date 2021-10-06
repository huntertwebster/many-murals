import React from 'react';
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useScript } from '../../hooks/useScript';

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


//  useEffect(() => {
//       dispatch({ type: 'FETCH_PROFILE' });
//       dispatch({ type: 'FETCH_GALLERY' });
//      }, []);

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
    

//cloudinary - open widget
  const openWidget = () => {
      // Currently there is a bug with the Cloudinary <Widget /> component
      // where the button defaults to a non type="button" which causes the form
      // to submit when clicked. So for now just using the standard widget that
      // is available on window.cloudinary
      // See docs: https://cloudinary.com/documentation/upload_widget#look_and_feel_customization
      !!window.cloudinary && window.cloudinary.createUploadWidget(
         {
            sources: ['local', 'url', 'camera'],
            cloudName: process.env.REACT_APP_CLOUDINARY_NAME,
            uploadPreset: process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
         },
         (error, result) => {
            if (!error && result && result.event === "success") {
               // When an upload is successful, save the uploaded URL to local state!
            setInputImage({ ...inputImage, url: result.info.secure_url})
            }
         },
      ).open();
   }




    return (
        <>
     {useScript('https://widget.cloudinary.com/v2.0/global/all.js')}       
    <Typography
        variant='h6'
    >
    Add an image to your post!  
    </Typography>
            
        <form onSubmit={handleImageSubmit}>
        {/* {'this is my input image:', inputImage.url}     */}
        {/* Url */}
        {/* <TextField
          id="filled-textarea"
          label="Url"
          placeholder="Insert the url.."    
          multiline
          variant="filled"
          onChange={(event) => setInputImage({ ...inputImage, url: event.target.value })}
          value={inputImage.url}
                /> */}
                
        File to upload: <button type="button" onClick={openWidget}>Pick File</button>
            <br />
                {inputImage.url && <p>Uploaded Image URL: {inputImage.url} <br />The mural you're posting: <img src={inputImage.url} width={100} /></p>}
                
     
        
        {/* Featured Image  */}
        {/* <TextField
          id="filled-textarea"
          label="Your featured image.."
          placeholder="Do you want this to be the cover?"
          variant="filled"
          onChange={(event) => setInputImage({ ...inputImage, featured_image: event.target.value })}
          value={inputImage.featured_image}
        />        */}

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