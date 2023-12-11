const express = require ('express');

const {createUser} = require('../service/user.service')

const route = express.Router();

route.post('/', async(req,res)=>{
    try {
        const data = await createUser(req.body);
        res.send(data);
    } catch (error) {
        res.send(error)
    }
})
module.exports = route;