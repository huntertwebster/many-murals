import React from "react";
import LogOutButton from "../LogOutButton/LogOutButton";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import { useHistory } from "react-router";
function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const history = useHistory();
  return (
    <>
      <div className="container">
        <h1>Hello, {user.name}!</h1>

        <p>Your username is: {user.username}</p>
        <p>Your email is: {user.email_address}</p>
        <p>Edit your account information below:</p>
        <Button
          style={{ fontFamily: "Cormorant Garamond" }}
          color="inherit"
          // startIcon={<SendIcon />} ADD ACCOUNT ICON
          onClick={() => history.push("/accountInfo")}
          value="Submit"
        >
          Account Information
        </Button>
        <LogOutButton className="btn" />
      </div>
    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
