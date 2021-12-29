import React from "react";
import LogOutButton from "../LogOutButton/LogOutButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useSelector } from "react-redux";
import { Button, Container } from "@mui/material";
import { useHistory } from "react-router";
function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
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
        {/* <LogOutButton className="btn" /> */}
      </Container>
    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
