const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//GETS all data for the artist display
router.get('/', (req, res) => {
    const query =
        `SELECT public.user.description, public.user.name FROM public.user;`;
    pool.query(query)
        .then(result => {
            res.send(result.rows);
        })
        .catch(err => {
            console.log('ERROR: Get all artist data', err);
            res.sendStatus(500)
        })

});



/**
 * POST route template
 */
router.post('/', (req, res) => {
    // POST route code here
});

module.exports = router;
