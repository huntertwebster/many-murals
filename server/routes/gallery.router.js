const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//GETS all data for the gallery 
router.get('/', (req, res) => {
  const query =
    `SELECT art_item.id, art_item.user_name, art_item.title, art_item.latitude, art_item.longitude, art_item.description, art_item.date,
    array_agg(images) as images FROM public.user
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


// POST route to add to the gallery (from artists page)
router.post('/', (req, res) => {
  const user_name = req.body.user_name;
  const title = req.body.title;
  const latitude = req.body.latitude;
  const longitude = req.body.longitude;
  const description = req.body.description;
  const date = req.body.date;
  const type = req.body.type;
  // needs the image!

  const queryText = `INSERT INTO "art_item" 
  (user_name, title, latitude, longitude, description, date, type)
  VALUES ($1, $2, $3, $4, $5, $6, $7)`;
  pool
    .query(queryText, [user_name, title, latitude, longitude, description, date, type])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('ERROR: Failed to POST to gallery', err);
      res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
  console.log(req.body);
  // RETURNING "id" will give us back the id of the created art_item
  const artItemQuery = `INSERT INTO "art_item"
  (user_id, user_name, title, latitude, longitude, description, date, type)
  VALUES($1, $2, $3, $4, $5, $6, $7, $8)
  RETURNING "id";`

  // FIRST QUERY MAKES ART_ITEM
  pool.query(artItemQuery, [req.body.user_id, req.body.user_name, req.body.title, req.body.latitude, req.body.longitude,
  req.body.description, req.body.date, req.body.type])
    .then(result => {
      console.log('New art_item Id:', result.rows[0].id); //ID IS HERE!

      const createdArtItemId = result.rows[0].id

      // Now handle the genre reference
      const imagesQuery = `
      INSERT INTO "images" ("art_item_id", "url")
      VALUES  ($1, $2);
      `
      // SECOND QUERY ADDS GENRE FOR THAT NEW IMAGE
      pool.query(imagesQuery, [createdArtItemId, req.body.url]).then(result => {
        //Now that both are done, send back success!
        res.sendStatus(201);
      }).catch(err => {
        // catch for second query
        console.log(err);
        res.sendStatus(500)
      })

      // Catch for first query
    }).catch(err => {
      console.log(err);
      res.sendStatus(500)
    })
});

// router.post('/register', (req, res, next) => {
// const username = req.body.username;
// const password = encryptLib.encryptPassword(req.body.password);

// const queryText = `INSERT INTO "user" (username, password)
//     VALUES ($1, $2) RETURNING id`;
// pool
//   .query(queryText, [username, password])
//   .then(() => res.sendStatus(201))
//   .catch((err) => {
//     console.log('User registration failed: ', err);
//     res.sendStatus(500);
//   });
// });

module.exports = router;
