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
router.put('/:id', (req, res) => {
    let itemId = req.params.id;
    console.log(req.body)
    console.log(req.params.id);
    let queryString = `UPDATE item SET name=$1, quantity=$2, unit=$3, purchased=$4 WHERE id=$5;`
    pool.query(queryString,[req.body.name, req.body.quantity , req.body.unit, itemId] )
    .then((result)=>{
        res.sendStatus(200);
    })
    .catch((err) =>{
        res.sendStatus(500);
    })
})
//DELETE
router.delete('/:id', (req,res) =>{
    deleteItem = req.params.id;
    console.log('in/item<id> DELETE', deleteItem);
    let queryString = `DELETE FROM item WHERE id=$1;`
    pool.query(queryString,[deleteItem])
    .then((result) =>{
        res.sendStatus(200);
    })
    .catch((err) =>{
        res.sendStatus(500);
    })
})

module.exports = router;