import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import useScript from 'react-script-hook';
import { useScript } from '../../hooks/useScript';
function CloudifyUploadForm(props) {
   const [state, setState] = useState({
      file_url: null
   });

   const dispatch = useDispatch();

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
               setState({
                  ...state,
                  file_url: result.info.secure_url
               })
            props.setInputImage({ url: state.file_url, featured_image: 'false' })
            }
         },
      ).open();
   }

//    const onSubmit = (event) => {
//       event.preventDefault();
//       if (state.file_url) {
//         //  dispatch({
//         //     type: 'SEND_UPLOAD',
//         //     payload: state
//         //  });
         
//          setState({
//             file_url: null
//          });
         
//       } else {
//          dispatch({ 
//             type: 'SET_ALERT', 
//             payload: { message: 'Please select a file for upload', alert: 'alert-error' } 
//          });
//       }
//    }

   return (
      <>
         {/* <form onSubmit={onSubmit}> */}
            <h2>Upload your mural</h2>
            { /* This just sets up the window.cloudinary widget */ }
            {useScript('https://widget.cloudinary.com/v2.0/global/all.js')}
            File to upload: <button type="button" onClick={openWidget}>Pick File</button>
            <br />
            {state.file_url && <p>Uploaded Image URL: {state.file_url} <br />The mural you're posting: <img src={state.file_url} width={100}/></p>}
            <br />
            <div>
               {/* <button type="submit">Submit Image</button> */}
            </div>
         {/* </form> */}
      </>
   )
}

export default CloudifyUploadForm;


