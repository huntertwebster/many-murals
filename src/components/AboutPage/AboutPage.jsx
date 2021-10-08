import React from 'react';

// MUI
import Typography from '@mui/material/Typography';

function AboutPage() {
  return (
    <div className="container">
      <div>

         <Typography
            variant="h3">
            Welcome to <em>Many Murals</em>  
          </Typography>
        
<br />

         <Typography
            variant="h5">
           There are so many murals in Fargo, yet not a great method of finding them.
          Many Murals is meant to make the method of finding the location of the murals and finding the artists that do them,
          an easy and an enjoyable process.  
          </Typography>
     
      </div>
    </div>
  );
}

export default AboutPage;
