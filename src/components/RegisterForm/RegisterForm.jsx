import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useScript } from '../../hooks/useScript';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
function RegisterForm() {
  // name, description, email_address, (type) username, password, phone_number, profile_image
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [email_address, setEmail_Address] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('')
  const [profile_image, setProfile_Image] = useState({url: ''});

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
        profile_image: profile_image.url
      },
    });
  }; // end registerUser

//cloudinary - open widget
  const openWidget = () => {
      // Currently there is a bug with the Cloudinary <Widget /> component
      // where the button defaults to a non type="button" which causes the form
      // to submit when clicked. So for now just using the standard widget that
      // is available on window.cloudinary
      // See docs: https://cloudinary.com/documentation/upload_widget#look_and_feel_customization
      !!window.cloudinary && window.cloudinary.createUploadWidget(
         {
            sources: ['local', 'url', 'camera'],
            cloudName: process.env.REACT_APP_CLOUDINARY_NAME,
            uploadPreset: process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
         },
         (error, result) => {
            if (!error && result && result.event === "success") {
               // When an upload is successful, save the uploaded URL to local state!
            setProfile_Image({ ...profile_image, url: result.info.secure_url})
            }
         },
      ).open();
   }


  return (
    <form className="formPanel" onSubmit={registerUser}>
      {useScript('https://widget.cloudinary.com/v2.0/global/all.js')}
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
        {/* profile_image */}
        <label htmlFor="profile image">
          Upload an avatar: 
          <Button

        style={{ color: "black", fontFamily: "Cormorant Garamond" }}
        startIcon={<InsertPhotoIcon />}
        onClick={openWidget}
        type="button"
        value="Submit"
        size="small"
        >
        Choose File
        </Button>
            <br />
                {profile_image.url && <p>Your profile picture: <br /> <img src={profile_image.url} width={100} /></p>}

        </label>
        <br />
          <Button
        value="Register"
        name="submit"
        type="submit"
      style={{
            fontFamily: 'Cormorant Garamond' ,
            color: "black" }}
      > Register
      </Button>
      </div>
      <div>
      </div>
    </form>
  );
}

export default RegisterForm;
