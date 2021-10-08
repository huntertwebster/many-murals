import React from 'react';
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router';

//MUI
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Container, Paper } from '@mui/material';

// MUI for date picker *stretch*
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';


function Form() {
  const dispatch = useDispatch();
  const history = useHistory();
    const [inputPost, setInputPost] = useState({ title: '', latitude: '', longitude: '', description: '', date: ''});
    // const [dateInput, setDateInput] = React.useState(new Date());
  
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
        setInputPost({ title: '', latitude: 0, longitude: 0, description: '', date: ''});
        history.push('/profile')
    };

    return (
      <Container>
         <Grid
            container
            spacing={3}
            justify="center"
            alignItems="center"
            
            >
            <Typography
                variant='h6'
            >
            Create a new post!  
            </Typography>
        
    <form onSubmit={handleSubmit} style={{textAlign: "center"}}>     
    <Grid item xs={12} sm={6} md={4} lg={3}>
        {/* title */} 
          <TextField
          required
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
          required
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
          required
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
          required
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
          required
          id="filled-textarea"
          label="Date of creation"
          placeholder="YYYY/MM/DD"
          format={'YYYY/MM/DD'}
          multiline
          type="date"
          variant="filled"
          onChange={(event) => setInputPost({ ...inputPost, date: event.target.value })}
          value={inputPost.date}
        />
          
      {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
          required
          disableFuture
          variant="filled"
          label="Date of creation"
          openTo="year"
          views={['year', 'month', 'day']}
          value={dateInput}
          onChange={(newValue) => {
            setDateInput(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider> */}
          
        <br />
        {/* button to submit post */}
        <Button
          variant="filled"
          color="inherit"
          startIcon={<SendIcon />}
          onClick={handleSubmit}
          type="submit"
          value="Submit">
          Submit
        </Button>

              </Grid>
            </form>
        </Grid>
    </Container>
    )
}
export default Form;