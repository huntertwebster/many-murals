import React from 'react';
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DeleteImage from '../DeleteImage/DeleteImage';

// MUI
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';


function EditPost() {
    const dispatch = useDispatch();
    const history = useHistory();
    const gallery = useSelector(store => store.gallery);
    const profile = useSelector(store => store.profile);
    // const artists = useSelector(store = store.artists);
    let params = useParams();
    console.log('these be the params:', params)

     useEffect(() => {
      dispatch({ type: 'FETCH_PROFILE' });
      dispatch({ type: 'FETCH_GALLERY' });
     }, []);
    
      
    
    // GALLERY: using paramaters 
    let editId = params.editId; 
    console.log(editId);
    let item = gallery.find(item => item.id === Number(editId));
    console.log(`found item to edit: `, item);
    const imageId = item?.images[0].id;
    const image = item?.images[0];
    // const imageUrl = item?.images[0].url;
    console.log('this is the WHOLE IMAGE:', image);
    console.log('this is the image ID:', imageId);
    console.log('this is the art_item_id:', item?.id);


    //    Bail out early with a message if the item isnt found
    // if (!item) {
    //         return <h2>Invalid Art Item ID</h2>;
    //     }
        
       
 const [editPost, setEditPost] = useState({
        title: item?.title, latitude: item?.latitude, longitude: item?.longitude,
        description: item?.description, date: item?.date
    });
    // create a map to look over all the images when there are multiple images to be able to update multiple 
    
    
    // edits the post
    function editHandler() {
        dispatch({
            type: 'EDIT_POST',
            payload: {
                id: item.id,
                title: editPost.title,
                latitude : editPost.latitude,
                longitude: editPost.longitude,
                description : editPost.description,
                date: editPost.date,
            }
        })
        history.push('/profile');
    }

    return (
        <div>
            <Typography
                variant="h6"
                color="initial"
            >Edit your post!
            </Typography>
           
        <form onSubmit={editHandler}>
                
                {/* edit title */} 
        <TextField
          id="filled-textarea"
          label="Title"
          placeholder="Edit your mural's title.."
          multiline
          variant="filled"
          onChange={(event) => setEditPost({ ...editPost, title: event.target.value })}
          value={editPost.title}
        />
       
                

        {/* edit latitude */}
        <TextField
          id="filled-textarea"
          label="Latitude"
          placeholder="Edit the latitude.."
          multiline
          variant="filled"
          onChange={(event) => setEditPost({ ...editPost, latitude: event.target.value })}
          value={editPost.latitude}
        />
     
                

        {/* edit longitude */}
        <TextField
          id="filled-textarea"
          label="Longitude"
          placeholder="Edit the longitude.."
          multiline
          variant="filled"
          onChange={(event) => setEditPost({ ...editPost, longitude: event.target.value })}
          value={editPost.longitude}
        />        
       
                

        {/* edit description */}
        <TextField
          id="filled-multiline-static"
          label="Description"
          placeholder="Edit the description of your mural..."
          multiline
          rows={4}
          type='text'
          variant="filled"
          onChange={(event) => setEditPost({ ...editPost, description: event.target.value })}
          value={editPost.description}
        />
      

        {/* edit date */}
        <TextField
          id="filled-textarea"
          label="Date"
          placeholder="Edit the date of creation.."
          multiline
          variant="filled"
          onChange={(event) => setEditPost({ ...editPost, date: event.target.value })}
          value={editPost.date}
                />
                <br />
        <Button
          variant="outlined"
          color="inherit"
          startIcon={<SendIcon />}
          type="submit"
          value="Submit">
          Submit
        </Button>
                
            </form>
            <>
            </>
        </div>
    );
}
export default EditPost;