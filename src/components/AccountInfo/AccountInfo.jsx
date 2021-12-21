import React from "react";

// MUI
import Typography from "@mui/material/Typography";
import { Button, Container, Paper, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useParams } from "react-router";
import { useEffect } from "react";
import { useState } from "react";

//this page exisits to allow an artist to edit their personal information
function AccountInfo() {
  const dispatch = useDispatch();
  const history = useHistory();
  const profile = useSelector((store) => store.profile);
  const user = useSelector((store) => store.user);
  const artists = useSelector((store) => store.artists);
  console.log("this is user information:", user);
  console.log("this is profile information:", profile);
  console.log("this is artists information:", artists);
  // const artists = useSelector(store = store.artists);
  let params = useParams();
  console.log("these be the params:", params);

  // USER: using paramaters
  let artistId = params.artistId;
  console.log(artistId);
  let accountInfo = profile.find(
    (accountInfo) => accountInfo.id === Number(artistId)
  );
  console.log(`found accountInfo to edit: `, accountInfo);
  const imageId = accountInfo?.images[0].id;
  const image = accountInfo?.images[0];
  // const imageUrl = accountInfo?.images[0].url;
  console.log("this is the WHOLE IMAGE:", image);
  console.log("this is the image ID:", imageId);
  console.log("this is the art_item_id:", accountInfo?.id);

  const [editAccountInfo, setAccountInfo] = useState({
    username: accountInfo?.username,
    description: accountInfo?.description,
    email_address: accountInfo?.email_address,
    name: accountInfo?.name,
    profile_image: accountInfo?.profile_image,
    // password: accountInfo?.password,
  });

  function editHandler() {
    dispatch({
      type: "EDIT_POST",
      payload: {
        id: accountInfo.id,
        username: editAccountInfo.username,
        description: editAccountInfo.description,
        email_address: editAccountInfo.email_address,
        name: editAccountInfo.name,
        profile_image: editAccountInfo.profile_image,
        // password: editAccountInfo.password
      },
    });
    history.push("/profile");
  }

  useEffect(() => {
    dispatch({ type: "FETCH_PROFILE" });
    dispatch({ type: "FETCH_GALLERY" });
  }, []);

  //    Bail out early with a message if the Account Info isnt found
  // if (!accountInfo) {
  //         return <h2>Invalid Account Information ID</h2>;
  //     }

  return (
    <Container className="accountInfo">
      <Typography variant="h3">Account info</Typography>
      <div className="editForm">
        <Typography
          style={{ textAlign: "center" }}
          variant="h5"
          color="initial"
        >
          Edit your account information!
        </Typography>
        <br />
        <form onSubmit={editHandler}>
          {/* edit title */}
          <TextField
            style={{ paddingBottom: "8px" }}
            id="outlined-textarea"
            label="Title"
            placeholder="Edit your mural's title.."
            multiline
            variant="outlined"
            onChange={(event) =>
              setAccountInfo({ ...editAccountInfo, title: event.target.value })
            }
            value={editAccountInfo.title}
          />

          {/* edit latitude */}
          <TextField
            style={{ paddingBottom: "8px" }}
            id="outlined-textarea"
            label="Latitude"
            placeholder="Edit the latitude.."
            multiline
            variant="outlined"
            onChange={(event) =>
              setAccountInfo({
                ...editAccountInfo,
                latitude: event.target.value,
              })
            }
            value={editAccountInfo.latitude}
          />

          {/* edit longitude */}
          <TextField
            style={{ paddingBottom: "8px" }}
            id="outlined-textarea"
            label="Longitude"
            placeholder="Edit the longitude.."
            multiline
            variant="outlined"
            onChange={(event) =>
              setAccountInfo({
                ...editAccountInfo,
                longitude: event.target.value,
              })
            }
            value={editAccountInfo.longitude}
          />

          {/* edit description */}
          <TextField
            style={{ paddingBottom: "8px" }}
            id="outlined-multiline-static"
            label="Description"
            placeholder="Edit the description of your mural..."
            multiline
            rows={4}
            type="text"
            variant="outlined"
            onChange={(event) =>
              setAccountInfo({
                ...editAccountInfo,
                description: event.target.value,
              })
            }
            value={editAccountInfo.description}
          />

          {/* edit date */}
          <TextField
            style={{ paddingBottom: "8px" }}
            id="outlined-textarea"
            label="Date"
            placeholder="Edit the date of creation.."
            multiline
            variant="outlined"
            onChange={(event) =>
              setAccountInfo({ ...editAccountInfo, date: event.target.value })
            }
            value={editAccountInfo.date}
          />
          <br />
          <br />
          <Button
            color="inherit"
            // startIcon={<SendIcon />}
            type="submit"
            value="Submit"
          >
            Submit
          </Button>
        </form>
        <></>
      </div>
      );
    </Container>
  );
}

export default AccountInfo;
