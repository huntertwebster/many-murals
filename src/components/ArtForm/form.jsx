import React from 'react';
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

//MUI
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

function Form() {
    const dispatch = useDispatch();
    const [inputPost, setInputPost] = useState({ title: '', latitude: '', longitude: '', description: '', date: ''});

    const handleSubmit = (event) => {
        console.log("Title input is:", inputPost.title);
        console.log("Latitude input is:", inputPost.latitude);
        console.log("Longitude input is:", inputPost.longitude);
        console.log("Description input is:", inputPost.description);
        console.log("Date input is:", inputPost.date);
        event.preventDefault();

       dispatch({
            type: 'ADD_POST',
            payload: inputPost
        })
        setInputPost('');
        // history.push('/')
    };

    return (
        <>
            <Typography
                variant='p'
            >
            Add a new post here:    
            </Typography>
        
    <form onSubmit={handleSubmit}>     
        {/* title */} 
        <TextField
          id="filled-textarea"
          label="Title"
          placeholder="Your mural's title.."
          multiline
          variant="filled"
          onChange={(event) => setInputPost({ ...inputPost, title: event.target.value })}
          value={inputPost.title}
        />
       
                

        {/* latitude */}
        <TextField
          id="filled-textarea"
          label="Latitude"
          placeholder="Insert the latitude.."
          multiline
          variant="filled"
          onChange={(event) => setInputPost({ ...inputPost, latitude: event.target.value })}
          value={inputPost.latitude}
        />
     
                

        {/* longitude */}
        <TextField
          id="filled-textarea"
          label="Longitude"
          placeholder="Insert the longitude.."
          multiline
          variant="filled"
          onChange={(event) => setInputPost({ ...inputPost, longitude: event.target.value })}
          value={inputPost.longitude}
        />        
       
                

        {/* description */}
        <TextField
          id="filled-multiline-static"
          label="Description"
          placeholder="Give a description of your mural..."
          multiline
          rows={4}
          type='text'
          variant="filled"
          onChange={(event) => setInputPost({ ...inputPost, description: event.target.value })}
          value={inputPost.description}
        />
      

        {/* date */}
        <TextField
          id="filled-textarea"
          label="Date"
          placeholder="Date of creation.."
          multiline
          variant="filled"
          onChange={(event) => setInputPost({ ...inputPost, date: event.target.value })}
          value={inputPost.date}
        />
      
                                
        {/* button to submit post */}
        <Button
          variant="outlined"
          color="inherit"
          startIcon={<SendIcon />}
          onClick={handleSubmit}
          type="submit"
          value="Submit">
          Submit
                </Button>
            </form>
            </>
    )
}
export default Form;