import React from "react";
import { useHistory } from "react-router-dom";
import RegisterForm from "./RegisterForm";
import Button from "@mui/material/Button";

function RegisterPage() {
  const history = useHistory();

  return (
    <div>
      <RegisterForm />

      <center>
        <Button
          style={{ color: "black", fontFamily: "Cormorant Garamond" }}
          className="btn btn_asLink"
          onClick={() => {
            history.push("/login");
          }}
        >
          Login
        </Button>
      </center>
    </div>
  );
}

export default RegisterPage;
