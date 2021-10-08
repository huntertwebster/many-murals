const express = require('express');
const router = express.Router();
const axios = require('axios');



router.get('/isLoaded', (req, res) => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: `${process.env.REACT_APP_GOOGLE_KEY}`
    })

});

module.exports = router;