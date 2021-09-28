const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

// GET grants access to the user depending on their access
router.get('/', rejectUnauthenticated, (req, res) => {
    const access = `SELECT art_item.id, art_item.user_name, art_item.title, art_item.latitude,
art_item.longitude, art_item.description, art_item.date, jsonb_agg(images) as images FROM public.user
JOIN art_item ON public.user.id = art_item.user_id
JOIN images on art_item.id = images.art_item_id
WHERE "art_item"."user_id" = $1
GROUP BY art_item.id, art_item.user_id, art_item.title, art_item.latitude, art_item.longitude, art_item.description, art_item.date;`
    console.log('req.user:', req.user.id);
    if (req.isAuthenticated()) {
        pool.query(access, [req.user.id])
            .then((results) => res.send(results.rows))
            .catch((error) => {
                console.log('Error making SELECT for artist:', error);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403);
    }
});


module.exports = router;