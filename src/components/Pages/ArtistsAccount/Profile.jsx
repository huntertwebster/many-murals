import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useSelector } from "react-redux";
import { Button, Container } from "@mui/material";
import { useHistory } from "react-router";
function Profile() {
  const user = useSelector((store) => store.user);
  const history = useHistory();
  return (
    <>
      <Container className="container">
        <h1>Hello, {user.name}!</h1>

        <p>Your username is: {user.username}</p>
        <p>Your email is: {user.email_address}</p>
        <Button
          className="btn"
          style={{ fontFamily: "Cormorant Garamond" }}
          color="inherit"
          startIcon={<AccountCircleIcon />}
          onClick={() => history.push("/accountInfo")}
          value="Submit"
        >
          Edit Account Information
        </Button>
      </Container>
    </>
  );
}

export default Profile;
