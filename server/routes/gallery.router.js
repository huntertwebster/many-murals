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



/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});


// router.post('/register', (req, res, next) => {
const username = req.body.username;
const password = encryptLib.encryptPassword(req.body.password);

const queryText = `INSERT INTO "user" (username, password)
    VALUES ($1, $2) RETURNING id`;
pool
  .query(queryText, [username, password])
  .then(() => res.sendStatus(201))
  .catch((err) => {
    console.log('User registration failed: ', err);
    res.sendStatus(500);
  });
});
module.exports = router;
