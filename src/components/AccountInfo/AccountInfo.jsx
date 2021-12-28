import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useParams } from "react-router";
import { useState } from "react";

// MUI
import Typography from "@mui/material/Typography";
import { Button, Container, TextField } from "@mui/material";

//this page exists to allow an artist to edit their personal information
function AccountInfo() {
  const dispatch = useDispatch();
  const history = useHistory();
  const profile = useSelector((store) => store.profile);
  const user = useSelector((store) => store.user);
  // const artists = useSelector((store) => store.artists);
  console.log("this is user information:", user);
  let params = useParams();
  console.log("these be the params:", params);

  // USER: using paramaters
  // let userId = params.userId;
  // console.log(userId);
  // let accountInfo = user.find(
  //   (accountInfo) => accountInfo.id === Number(userId)
  // );
  // console.log(`found the account to edit: `, accountInfo);
  // console.log("this is the art_item_id:", accountInfo?.id);

  const [editAccountInfo, setAccountInfo] = useState({
    username: editAccountInfo?.username,
    description: editAccountInfo?.description,
    email_address: editAccountInfo?.email_address,
    name: editAccountInfo?.name,
    profile_image: editAccountInfo?.profile_image,
    // password: accountInfo?.password,
    phone_number: editAccountInfo?.phone_number,
  });

  function editHandler() {
    dispatch({
      type: "SET_USER",
      payload: {
        id: user.id,
        username: editAccountInfo.username,
        description: editAccountInfo.description,
        email_address: editAccountInfo.email_address,
        name: editAccountInfo.name,
        profile_image: editAccountInfo.profile_image,
        password: editAccountInfo.password,
        phone_number: editAccountInfo.phone_number,
      },
    });
    history.push("/profile");
  }

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
          {/* edit username */}
          <TextField
            style={{ paddingBottom: "8px" }}
            id="outlined-textarea"
            label="Username"
            placeholder="Edit your username.."
            multiline
            variant="outlined"
            onChange={(event) =>
              setAccountInfo({
                ...editAccountInfo,
                username: event.target.value,
              })
            }
            value={editAccountInfo.username}
          />

          {/* edit password */}
          {/* <TextField
            style={{ paddingBottom: "8px" }}
            id="outlined-textarea"
            label="Password"
            placeholder="Edit your password.."
            multiline
            variant="outlined"
            onChange={(event) =>
              setAccountInfo({
                ...editAccountInfo,
                password: event.target.value,
              })
            }
            value={editAccountInfo.password}
          /> */}

          {/* edit email address */}
          <TextField
            style={{ paddingBottom: "8px" }}
            id="outlined-textarea"
            label="Email Address"
            placeholder="Edit your email address.."
            multiline
            variant="outlined"
            onChange={(event) =>
              setAccountInfo({
                ...editAccountInfo,
                email_address: event.target.value,
              })
            }
            value={editAccountInfo.email_address}
          />

          {/* edit description */}
          <TextField
            style={{ paddingBottom: "8px" }}
            id="outlined-textarea"
            label="Description"
            placeholder="Edit your description of yourself.."
            multiline
            rows={5}
            variant="outlined"
            onChange={(event) =>
              setAccountInfo({
                ...editAccountInfo,
                description: event.target.value,
              })
            }
            value={editAccountInfo.description}
          />

          {/* edit name */}
          <TextField
            style={{ paddingBottom: "8px" }}
            id="outlined-multiline-static"
            label="Your name"
            placeholder="Edit your name..."
            multiline
            type="text"
            variant="outlined"
            onChange={(event) =>
              setAccountInfo({
                ...editAccountInfo,
                name: event.target.value,
              })
            }
            value={editAccountInfo.name}
          />

          {/* edit profile image */}
          <TextField
            style={{ paddingBottom: "8px" }}
            id="outlined-textarea"
            label="Profile Picture"
            placeholder="Edit your profile picture.."
            multiline
            variant="outlined"
            onChange={(event) =>
              setAccountInfo({
                ...editAccountInfo,
                profile_image: event.target.value,
              })
            }
            value={editAccountInfo.profile_image}
          />
          {/* edit phone number */}
          <TextField
            style={{ paddingBottom: "8px" }}
            id="outlined-textarea"
            label="Phone Number"
            placeholder="Edit your phone number.."
            multiline
            variant="outlined"
            onChange={(event) =>
              setAccountInfo({
                ...editAccountInfo,
                phone_number: event.target.value,
              })
            }
            value={editAccountInfo.phone_number}
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
    </Container>
  );
}

export default AccountInfo;
