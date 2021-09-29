const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');


//GETS all data for the artist display
router.get('/', (req, res) => {
    const query =
        `SELECT public.user.description, public.user.name, public.user.profile_image FROM public.user;`;
    pool.query(query)
        .then(result => {
            res.send(result.rows);
        })
        .catch(err => {
            console.log('ERROR: Get all artist data', err);
            res.sendStatus(500)
        })
});

// create a put for updating artist info
// PUT art_item from the artist profile so the artist can edit their posts
router.put('/:id', rejectUnauthenticated, (req, res) => {
    if (req.params.id === req.user.id || user.type === 'admin') {
        const updatedArt_Item = req.body;
        console.log('this is the req.params!', req.params);

        const queryText = `UPDATE art_item
    SET "title" = $1, 
    "latitude" = $2, 
    "longitude" = $3, 
    "description" = $4, 
    "date" = $5, 
    "type" = $6 
    WHERE id=$7;`;

        const queryValues = [
            updatedArt_Item.title,
            updatedArt_Item.latitude,
            updatedArt_Item.longitude,
            updatedArt_Item.description,
            updatedArt_Item.date,
            updatedArt_Item.type,
            req.params.id
        ];

        pool.query(queryText, queryValues)
            .then(() => { res.sendStatus(200); })
            .catch((err) => {
                console.log('Error editing an art_item!', err);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus('ERROR: you are not authorized to delete this picture!')
    }
});



// DELETE artist profile (admin)
router.delete('/deleteArtist/:id', rejectUnauthenticated, (req, res) => {
    if (req.params.id === req.user.id || user.type === 'admin') {
        const queryText = 'DELETE FROM user WHERE id=$1';
        pool.query(queryText, [req.params.id])
            .then(() => { res.sendStatus(200); })
            .catch((err) => {
                console.log('Error deleting artist from user', err);
                res.sendStatus(500);
            });
    }
    else {
        res.sendStatus('ERROR: you are not authorized to delete this user!')
    }
});


module.exports = router;
