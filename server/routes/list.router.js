const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...
router.get('/'), (req, res) => {
    const sqlText= `SELECT * FROM "item" ORDER BY "id";`;
    pool.query(sqlText)
        .then((results) => {
            console.log('Get stuff back from the database', result);
            res.send(result.row);
        })
        .catch((errpr) => {
            console.log('Error with getting from database', error);
            res.sendStatus(500);
        })
}

router.post('/', (req, res) => {
    const item = req.body;
    const sqlText = `Insert INTO "item" (name, quantity, unit, purchased)
                    VALUES ($1, $2, $3, $4)`;

    pool.query(sqlText, [item.name, item.quantity, item.unit, item.purchased])
        .then((result) => {
            console.log('Added item to the database', item);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('Error with making post request', error);
        })
})
//PUT

//DELETE

module.exports = router;