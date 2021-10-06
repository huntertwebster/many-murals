import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function RegisterForm() {
  // name, description, email_address, (type) username, password, phone_number, profile_image
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [email_address, setEmail_Address] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('')
  const [profile_image, setProfile_Image] = useState('');
  
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        name: name,
        description: description,
        email_address: email_address,
        username: username,
        password: password,
        profile_image: profile_image
      },
    });
  }; // end registerUser

  return (
    <form className="formPanel" onSubmit={registerUser}>
      <h2>Register User</h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <div>
        {/* username */}
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>
      <div>
        {/* password */}
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <br />
        {/* name */}
        <label htmlFor="name">
          Name:
          <input
            type="text"
            name="name"
            value={name}
            required
            onChange={(event) => setName(event.target.value)}
          />
        </label>
         <br />
        {/* description */}
        <label htmlFor="description">
          Description of yourself:
          <input
            type="text"
            name="description"
            value={description}
            required
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>
        <br />
        {/* email_address */}
        <label htmlFor="email address">
          Your Email Address:
          <input
            type="email"
            name="email address"
            value={email_address}
            required
            onChange={(event) => setEmail_Address(event.target.value)}
          />
        </label>
         <br />
        {/* phone_number */}
        <label htmlFor="phone number">
          Phone Number:
          <input
            type="integer"
            name="phone number"
            value={phone_number}
            required
            onChange={(event) => setPhone_Number(event.target.value)}
          />
        </label>
         <br />
        {/* profile_image */}
        <label htmlFor="profile image">
          Profile Image:
          <input
            type="text"
            name="profile image"
            value={profile_image}
            required
            onChange={(event) => setProfile_Image(event.target.value)}
          />
        </label>
      </div>
      <div>
        <input className="btn" type="submit" name="submit" value="Register" />
      </div>
    </form>
  );
}

export default RegisterForm;
