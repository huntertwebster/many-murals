const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');


//GETS all data for the gallery 
router.get('/', (req, res) => {
  const query =
    `SELECT art_item.id, art_item.user_id, art_item.user_name, art_item.title, art_item.latitude, art_item.longitude, art_item.description, art_item.date,
    jsonb_agg(images) as images FROM public.user
    JOIN art_item ON public.user.id = art_item.user_id
    JOIN images on art_item.id = images.art_item_id
    GROUP BY art_item.id, art_item.user_id, art_item.title, art_item.latitude, art_item.longitude, art_item.description, art_item.date;
`;
  pool.query(query)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all gallery data', err);
      res.sendStatus(500)
    })
});

// POST for an individual picture
router.post('/image/:id', rejectUnauthenticated, (req, res) => {
  console.log('art item id:', req.params.id);
  let userId = NaN;
  const authText = `SELECT "user_id" FROM "art_item" WHERE "art_item"."id" = (SELECT "art_item_id" FROM "images" WHERE "images"."id" = $1);`
  console.log('POST PARAMS:', req.params.id)
  pool.query(authText, [req.params.id])
    .then((result) => {
      if (userId === req.user.id || req.user.type === 'admin') {
        userId = result.rows[0].user_id
        console.log('this is the user_id', userId)
        console.log('body for add image', (req.body));
        const imageQuery = `INSERT INTO "images" ("art_item_id", "url", "featured_image")
        VALUES($1, $2, $3); `
        // QUERY MAKES IMAGE
        pool.query(imageQuery, [req.body.art_item_id, req.body.url, req.body.featured_image])
          .then(result => { res.sendStatus(201) })
          .catch(err => {
            console.log('Error uploading picture', err);
            res.sendStatus(500)
          });
      } else {
        res.sendStatus((403), 'ERROR: you are not authorized to delete this picture!')
      }
    }).catch((err) => {
      console.log('Could not find user_id with this art_item..', err);
    });
});

// DELETE individual picture from the artist page
router.delete('/image/:id', rejectUnauthenticated, (req, res) => {
  console.log('image id:', req.params.id);
  let userId = NaN;
  const authText = `SELECT "user_id" FROM "art_item" WHERE "art_item"."id" = $1;`
  pool.query(authText, [req.params.id])
    .then((result) => {
      console.log('this is the user_id', userId)
      console.log('this is the result', result.rows)
      console.log('these are my params in image delete', (req.params.id));
      if (userId === req.user.id || req.user.type === 'admin') {
        userId = result.rows[0].user_id
        const queryText = 'DELETE FROM "images" WHERE "id" = $1';
        pool.query(queryText, [req.params.id])
          .then((result) => { res.sendStatus(200); })
          .catch((error) => {
            console.log('ROUTER, DELETE PICTURE: Error deleting an image', error);
            res.sendStatus(500);
          });
      } else {
        res.sendStatus((403), 'ERROR: you are not authorized to delete this picture!')
      }
    }).catch((err) => {
      console.log('Could not find user_id with this art_item..', err);
    });
});


// POST for art_item
router.post('/', rejectUnauthenticated, (req, res) => {

  // RETURNING "id" will give us back the id of the created art_item
  console.log(' user!', req.user);
  const artItemQuery = `INSERT INTO "art_item"
  (user_id, user_name, title, latitude, longitude, description, date)
  VALUES($1, $2, $3, $4, $5, $6, $7)
  RETURNING "id";`

  // QUERY MAKES ART_ITEM
  pool.query(artItemQuery, [req.user.id, req.user.name, req.body.title, req.body.latitude, req.body.longitude,
  req.body.description, req.body.date])
    .then(result => { res.sendStatus(201); })
    // catch for first query
    .catch(err => {
      console.log(err);
      res.sendStatus(500)
    });
});


// DELETE ENTIRE POST from the gallery by the artist
router.delete('/:id', rejectUnauthenticated, (req, res) => {
  console.log('art item id:', req.params.id);
  let userId = NaN;
  const authText = `SELECT "user_id" FROM "art_item" WHERE "art_item"."id" = $1;`
  console.log('Delete entire post params:', req.params.id)
  pool.query(authText, [req.params.id])
    .then((result) => {
      console.log('this is the result', result.rows)
      console.log('this is the user_id', userId)
      if (userId === req.user.id || req.user.type === 'admin') {
        userId = result.rows[0].user_id
        const queryText = 'DELETE FROM "art_item" WHERE "id" = $1';
        pool.query(queryText, [req.params.id])
          .then(() => { res.sendStatus(200); })
          .catch((err) => {
            console.log('ROUTER, DELETE POST: Error deleting from art_item', err);
            res.sendStatus(500);
          });
      } else {
        res.sendStatus((403), 'ERROR: you are not authorized to delete this post!')
      }
    }).catch((err) => {
      console.log('Could not find user_id with this art_item..', err);
    });
});





// PUT art_item from the artist profile so the artist can edit their posts
router.put('/:id', rejectUnauthenticated, (req, res) => {

  //validating if art item is users
  let userId = NaN;
  const authText = `SELECT "user_id" FROM "art_item" WHERE "art_item"."id" = $1;`
  console.log('PUT PARAMS:', req.params.id)
  pool.query(authText, [req.params.id])
    .then((result) => {
      userId = result.rows[0].user_id
      console.log('this is the user_id', userId)
      if (userId === req.user.id || req.user.type === 'admin') {
        const updatedArt_Item = req.body;
        const art_item_id = req.params.id;
        console.log('PUT ROUTER: REQ.BODY: ', updatedArt_Item)
        console.log('PUT ROUTER: this is the req.params!', art_item_id);
        //only let someone let the owner update their art
        const art_Item_query = `UPDATE art_item
    SET "title" = $1, 
    "latitude" = $2, 
    "longitude" = $3, 
    "description" = $4, 
    "date" = $5
    WHERE "id" = $6`;

        const queryValues = [
          updatedArt_Item.title,
          updatedArt_Item.latitude,
          updatedArt_Item.longitude,
          updatedArt_Item.description,
          updatedArt_Item.date,
          art_item_id
        ];

        pool.query(art_Item_query, queryValues)
          .then(() => { res.sendStatus(200); })
          .catch((err) => {
            console.log('Error editing an art_item!', err);
            res.sendStatus(500);
          });
      } else {
        res.sendStatus((403), 'ERROR: you are not authorized to update this post!')
      }
    }).catch((err) => {
      console.log('Could not find user_id with this art_item..', err);
    });
});


module.exports = router;
