import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import "../ArtForm/form.css";
//MUI
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Container, Paper } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

// MUI for date picker *stretch*
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

function Form() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [inputPost, setInputPost] = useState({
    title: "",
    latitude: "",
    longitude: "",
    description: "",
    date: "",
  });
  // const [dateInput, setDateInput] = React.useState(new Date());

  const handleSubmit = (event) => {
    console.log("Title input is:", inputPost.title);
    console.log("Latitude input is:", inputPost.latitude);
    console.log("Longitude input is:", inputPost.longitude);
    console.log("Description input is:", inputPost.description);
    console.log("Date input is:", inputPost.date);
    event.preventDefault();

    dispatch({
      type: "ADD_POST",
      payload: inputPost,
    });
    setInputPost({
      title: "",
      latitude: 0,
      longitude: 0,
      description: "",
      date: "",
    });
    history.push("/profile");
  };

  return (
    <div className="createForm">
      <Container>
        <Grid container spacing={3} justify="center" alignItems="center">
          <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
            <Typography variant="h6" style={{ textAlign: "center" }}>
              Create a new post!
            </Typography>

            <Grid item xs={12} sm={6} md={4} lg={3}>
              {/* title */}
              <TextField
                required
                id="outlined-textarea"
                label="Title"
                placeholder="Your mural's title.."
                multiline
                variant="outlined"
                onChange={(event) =>
                  setInputPost({ ...inputPost, title: event.target.value })
                }
                value={inputPost.title}
              />

              {/* latitude */}
              <TextField
                required
                id="outlined-textarea"
                label="Latitude"
                placeholder="Insert the latitude.."
                multiline
                variant="outlined"
                onChange={(event) =>
                  setInputPost({ ...inputPost, latitude: event.target.value })
                }
                value={inputPost.latitude}
              />

              {/* longitude */}
              <TextField
                required
                id="outlined-textarea"
                label="Longitude"
                placeholder="Insert the longitude.."
                multiline
                variant="outlined"
                onChange={(event) =>
                  setInputPost({ ...inputPost, longitude: event.target.value })
                }
                value={inputPost.longitude}
              />

              {/* description */}
              <TextField
                required
                id="outlined-multiline-static"
                label="Description"
                placeholder="Give a description of your mural..."
                multiline
                rows={4}
                type="text"
                variant="outlined"
                onChange={(event) =>
                  setInputPost({
                    ...inputPost,
                    description: event.target.value,
                  })
                }
                value={inputPost.description}
              />

              {/* date */}
              <TextField
                required
                style={{ fontFamily: "Cormorant Garamond" }}
                id="outlined-textarea"
                label="Date of creation"
                placeholder="YYYY/MM/DD"
                format={"YYYY/MM/DD"}
                multiline
                type="date"
                variant="outlined"
                onChange={(event) =>
                  setInputPost({ ...inputPost, date: event.target.value })
                }
                value={inputPost.date}
              />

              {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
          required
          disableFuture
          variant="outlined"
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
              <br />
              {/* button to submit post */}
              <Button
                style={{ fontFamily: "Cormorant Garamond" }}
                color="inherit"
                startIcon={<SendIcon />}
                onClick={handleSubmit}
                type="submit"
                value="Submit"
              >
                Submit
              </Button>
            </Grid>
          </form>
        </Grid>
      </Container>
    </div>
  );
}
export default Form;
