const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

// ADMIN DELETE an entire art_item from the gallery and the artist page 
router.delete('/:id', rejectUnauthenticated, (req, res) => {
    const queryText = 'DELETE FROM art_item WHERE id=$1';
    pool.query(queryText, [req.params.id])
        .then(() => { res.sendStatus(200); })
        .catch((err) => {
            console.log('Admin error deleting from art_item', err);
            res.sendStatus(500);
        });
});

// DELETE individual picture from the artist page
router.delete('/single/:id', rejectUnauthenticated, (req, res) => {
    const queryText = 'DELETE FROM images WHERE id=$1';
    pool.query(queryText, [req.params.id])
        .then(() => { res.sendStatus(200); })
        .catch((err) => {
            console.log('Error deleting from images', err);
            res.sendStatus(500);
        });
});

// ADMIN PUT to edit an art_item from the gallery and the artist page 
router.put('/:id', rejectUnauthenticated, (req, res) => {
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
});

// router.put('/:id',rejectUnauthenticated, (req, res) => {
//     const artistData = req.body;
//     console.log('this is the req.params!', req.params);

//     const artItem = `UPDATE art_item
//     SET "title" = $1, 
//     "latitude" = $2, 
//     "longitude" = $3, 
//     "description" = $4, 
//     "date" = $5, 
//     "type" = $6 
//     WHERE id=$7;`;


//     const artistValues = [
//         artistData.title,
//         artistData.latitude,
//         artistData.longitude,
//         artistData.description,
//         artistData.date,
//         artistData.type,
//         req.params.id
//     ];

//     pool.query(artItem, artistValues)
//         .then(() => {
//             const images = `UPDATE art_item SET "url" = $1`;
//             const imagesValues = [
//                 artistData.url
//             ];
//             pool.query(images, imagesValues)
//                 .then(() => { res.sendStatus(200) })
//                 .catch((err) => {
//                     console.log('Error completeing Select image query', err)
//                 })
//         })
//         .catch((err) => {
//             console.log('Admin error editing an art_item!', err);
//             res.sendStatus(500);
//         });
// });

module.exports = router;

