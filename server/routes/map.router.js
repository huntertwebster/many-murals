const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/map', (req, res) => {
    // 1: GET request from google maps
    axios.get(`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`).then(response => {
        // console.log(response.data);
        // 2: Send it to the client!
        res.send(response.data);
    })
});
module.exports = router;