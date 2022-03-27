import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useParams } from "react-router";
import { useState } from "react";
import { useScript } from "../../../hooks/useScript";
// MUI
import Typography from "@mui/material/Typography";
import { Button, Container, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { alpha, styled } from "@mui/material/styles";
import SendIcon from "@mui/icons-material/Send";
import Grid from "@mui/material/Grid";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";

// MUI STYLED COMPONENTS
const StyledTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "black",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "black",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "rgb(190, 190, 190)",
    },
    "&:hover fieldset": {
      borderColor: "black",
    },
    "&.Mui-focused fieldset": {
      borderColor: "black",
    },
  },
});

const StyledButton = styled(Button)(({ theme }) => ({
  fontFamily: "Cormorant Garamond",
}));

//this page exists to allow an artist to edit their personal information
function EditAccountInformation() {
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
  // let accountInfo = user.map(
  //   (accountInfo) => accountInfo.id === Number(userId)
  // );
  // console.log(`found the account to edit: `, accountInfo);
  // console.log("this is the art_item_id:", accountInfo?.id);

  const [editAccountInfo, setAccountInfo] = useState({
    username: user?.username,
    description: user?.description,
    email_address: user?.email_address,
    name: user?.name,
    // password: accountInfo?.password,
    phone_number: user?.phone_number,
  });

  const [profile_image, setProfile_Image] = useState({ url: "" });

  function editHandler() {
    dispatch({
      type: "EDIT_ACCOUNT_INFO",
      payload: {
        id: user.id,
        username: editAccountInfo.username,
        description: editAccountInfo.description,
        email_address: editAccountInfo.email_address,
        name: editAccountInfo.name,
        password: editAccountInfo.password,
        phone_number: editAccountInfo.phone_number,
        profile_image: profile_image.url,
      },
    });
    // history.push("/profile");
  }

  //    Bail out early with a message if the Account Info isnt found
  // if (!accountInfo) {
  //         return <h2>Invalid Account Information ID</h2>;
  //     }`

  //cloudinary - open widget
  const openWidget = () => {
    // Currently there is a bug with the Cloudinary <Widget /> component
    // where the button defaults to a non type="button" which causes the form
    // to submit when clicked. So for now just using the standard widget that
    // is available on window.cloudinary
    // See docs: https://cloudinary.com/documentation/upload_widget#look_and_feel_customization
    !!window.cloudinary &&
      window.cloudinary
        .createUploadWidget(
          {
            sources: ["local", "url", "camera"],
            cloudName: process.env.REACT_APP_CLOUDINARY_NAME,
            uploadPreset: process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET,
          },
          (error, result) => {
            if (!error && result && result.event === "success") {
              // When an upload is successful, save the uploaded URL to local state!
              setProfile_Image({
                ...profile_image,
                url: result.info.secure_url,
              });
            }
          }
        )
        .open();
  };

  return (
    <Container className="editForm">
      <Typography variant="h4">Account info</Typography>
      <Typography style={{ textAlign: "center" }} variant="h5" color="initial">
        Edit your account information!
      </Typography>
      <br />
      <form onSubmit={editHandler}>
        {/* for cloudinary's widget to open */}
        {useScript("https://widget.cloudinary.com/v2.0/global/all.js")}

        <Grid container spacing={{ xs: 2, sm: 2, md: 2, lg: 2, xl: 2 }}>
          <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
            {/* edit username */}
            <StyledTextField
              fullWidth
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
          </Grid>
          {/* edit password */}
          {/* <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
             <StyledTextField
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
          /> 
          </Grid> */}
          {/* edit email address */}
          <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
            <StyledTextField
              fullWidth
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
          </Grid>
          {/* edit name */}
          <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
            <StyledTextField
              fullWidth
              style={{ paddingBottom: "8px" }}
              id="outlined-textarea"
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
          </Grid>
          {/* edit phone number */}
          <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
            <StyledTextField
              fullWidth
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
          </Grid>
          {/* edit description */}
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <StyledTextField
              fullWidth
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
          </Grid>

          {/* edit profile image */}
          {/* <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
            <StyledTextField
              fullWidth
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
          </Grid> */}
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <label htmlFor="profile image">
              Edit your avatar:
              <Button
                style={{
                  color: "black",
                  fontFamily: "Cormorant Garamond",
                }}
                startIcon={<InsertPhotoIcon />}
                onClick={openWidget}
                type="button"
                value="Submit"
                size="small"
              >
                Choose File
              </Button>
              {profile_image.url && (
                <p>
                  Your new profile picture: <br />{" "}
                  <img src={profile_image.url} width={150} />
                </p>
              )}
            </label>
          </Grid>
          <br />
          <br />
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <StyledButton
              color="inherit"
              startIcon={<SendIcon />}
              type="submit"
              value="Submit"
            >
              Submit
            </StyledButton>
          </Grid>
        </Grid>
      </form>
      <></>
    </Container>
  );
}

export default EditAccountInformation;
