const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');

//GETS all data for the artist display
router.get('/', (req, res) => {
    const query =
        `SELECT public.user.id, public.user.description, public.user.name, public.user.profile_image FROM public.user;`;
    pool.query(query)
        .then(result => {
            res.send(result.rows);
        })
        .catch(err => {
            console.log('ERROR: Get all artist data', err);
            res.sendStatus(500)
        })
});


// PUT art_item from the artist profile so the artist can edit their posts
router.put('/:id', rejectUnauthenticated, (req, res) => {
    console.log('THESE ARE MY PARAMS id:', req.params.id);
    console.log('user id:', req.user.id)
    // if (Number(req.params.id) === req.user.id || req.user.type === 'admin') {
    const updateUserInfo = req.body;
    const password = encryptLib.encryptPassword(req.body.password);
    console.log('this is the req.params!', req.params.id);
    const queryText = `UPDATE "user"
    SET "name" = $1,
    "description" = $2,
    "email_address" = $3, 
    "username" = $4, 
    "password" = $5, 
    "phone_number" = $6,
    "profile_image" = $7
    WHERE id=$8;`;

    const queryValues = [
        updateUserInfo.name,
        updateUserInfo.description,
        updateUserInfo.email_address,
        updateUserInfo.username,
        password,
        updateUserInfo.phone_number,
        updateUserInfo.profile_image,
        req.params.id
    ];

    pool.query(queryText, queryValues)
        .then(() => {
            res.sendStatus(200)
        }).catch((err) => {
            console.log('Error editing a user profile!', err);
            res.sendStatus(500);
        });
    // } else {
    //     res.sendStatus('ERROR: you are not authorized to edit this user profile!')
    // }
});



// DELETE artist profile (admin)
router.delete('/:id', rejectUnauthenticated, (req, res) => {
    const queryText = `DELETE FROM "user" WHERE "id" = $1;`;
    pool.query(queryText, [req.params.id])
        .then(() => { res.sendStatus(200); })
        .catch((err) => {
            console.log('DELETE ROUTER: Error deleting artist from user', err);
            res.sendStatus(500);
        });
});


module.exports = router;
