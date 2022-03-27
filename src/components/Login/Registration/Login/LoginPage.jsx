import React from "react";
import LoginForm from "../Login/LoginForm";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
function LoginPage() {
  const history = useHistory();

  return (
    <div>
      <LoginForm />

      <center>
        <Button
          style={{
            fontFamily: "Cormorant Garamond",
            color: "black",
          }}
          onClick={() => {
            history.push("/registration");
          }}
        >
          Register
        </Button>
      </center>
    </div>
  );
}

export default LoginPage;
