import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import { Button } from '@mui/material';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    
    <form className="formPanel" onSubmit={login}>
      <h2
        
      >
        Login</h2>
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}
      <div>
        <label htmlFor="username">
          Username:
          <input
            style={{fontFamily: "Cormorant Garamond"}}
            type="text"
            name="username"
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password:
          <input
            style={{fontFamily: "Cormorant Garamond"}}
            type="password"
            name="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <div>
        <Button
          type="submit"
          color="inherit"
          className="btn"
          name="submit"
          size="small"
          style={{
            fontFamily: "Cormorant Garamond",
            border: "1px",
            borderRadius: "2px",
            fontSize: "15px"
          }}
          variant="outlined"
        >
        Log In
        </Button>
        {/* <button style={{fontFamily: "Cormorant Garamond"}} className="btn" type="submit" name="submit" value="Log In" /> */}
      </div>
      </form>
  );
}

export default LoginForm;
