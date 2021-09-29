import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <p>There are so many murals in Fargo, and not a great method of finding them. My project Many Murals is meant to make the method of finding the location of the murals, finding the artists that do them, and contacting the artists an easy process. Many Murals is my 2 week solo project for Emerging Digital Academy demonstrating a build of a CRUD app using react.js and other technologies. </p>
      </div>
    </div>
  );
}

export default AboutPage;
