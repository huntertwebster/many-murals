const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// ADMIN DELETE an entire art_item from the gallery and the artist page 
router.delete('/:id', (req, res) => {
    const queryText = 'DELETE FROM art_item WHERE id=$1';
    pool.query(queryText, [req.params.id])
        .then(() => { res.sendStatus(200); })
        .catch((err) => {
            console.log('Admin error deleting from art_item', err);
            res.sendStatus(500);
        });
});

// ADMIN PUT to edit an art_item from the gallery and the artist page 
router.put('/:id', (req, res) => {
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
            console.log('Admin error editing an art_item!', err);
            res.sendStatus(500);
        });
});

module.exports = router;