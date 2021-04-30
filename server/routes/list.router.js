const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');


// TODO - Add routes here...

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