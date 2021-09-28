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


// this is the POST within the artist profile to add an art piece
router.post('/', (req, res) => {
    console.log('This is the REQ.BODY!!:', req.body);
    // RETURNING "id" will give us back the id of the created art_item
    console.log('This is my user!', req.user);
    const artItemQuery = `INSERT INTO "art_item"
  (user_id, user_name, title, latitude, longitude, description, date, type)
  VALUES($1, $2, $3, $4, $5, $6, $7, $8)
  RETURNING "id";`

    // FIRST QUERY MAKES ART_ITEM
    pool.query(artItemQuery, [req.user.id, req.user.name, req.body.title, req.body.latitude, req.body.longitude,
    req.body.description, req.body.date, req.body.type])
        .then(result => {
            console.log('New art_item Id:', result.rows[0].id); //ID IS HERE!

            const createdArtItemId = result.rows[0].id

            // Now handle the images reference
            const imagesQuery = `
        INSERT INTO "images" ("art_item_id", "url", "featured_image")
        VALUES($1, $2, $3);
        `
            // SECOND QUERY ADDS GENRE FOR THAT NEW IMAGE
            pool.query(imagesQuery, [createdArtItemId, req.body.url, req.body.featured_image]).then(result => {
                //Now that both are done, send back success!
                res.sendStatus(201);
            }).catch(err => {
                // catch for second query
                console.log(err);
                res.sendStatus(500)
            })

            // catch for first query
        }).catch(err => {
            console.log(err);
            res.sendStatus(500)
        })
});

// DELETE ENTIRE POST from the artist page
router.delete('/:id', (req, res) => {
    const queryText = 'DELETE FROM art_item WHERE id=$1';
    pool.query(queryText, [req.params.id])
        .then(() => { res.sendStatus(200); })
        .catch((err) => {
            console.log('Error deleting from art_item', err);
            res.sendStatus(500);
        });
});


// PUT art_item from the artist profile so the artist can edit their posts
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
            console.log('Error editing an art_item!', err);
            res.sendStatus(500);
        });
});


module.exports = router;
